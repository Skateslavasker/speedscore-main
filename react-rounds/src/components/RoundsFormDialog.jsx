// RoundFormDialog.js
import React, { useState, useEffect } from 'react';
import { useRoundsContext } from '../context/RoundsContext';

function RoundFormDialog({ open, onClose, editingRound }) {
   // Access the dispatch function from RoundsContext to manage rounds state
  const { dispatch } = useRoundsContext();

  // Local states for each field
  const [date, setDate] = useState('');
  const [course, setCourse] = useState('');
  const [type, setType] = useState('practice');
  const [holes, setHoles] = useState('18');
  const [strokes, setStrokes] = useState(80);
  const [minutes, setMinutes] = useState(60);
  const [seconds, setSeconds] = useState('00');
  const [notes, setNotes] = useState('');
  const [SGS, setSGS] = useState('140:00');   // Speedgolf score

  useEffect(() => {
    if (editingRound) {
      // Set form fields based on the round being edited
      setDate(editingRound.date);
      setCourse(editingRound.course);
      setType(editingRound.type || 'practice');
      setHoles(editingRound.holes || '18');
      setStrokes(editingRound.strokes || 80);
      setMinutes(editingRound.minutes || 60);
      setSeconds(editingRound.seconds || '00');
      setNotes(editingRound.notes || '');
      setSGS(editingRound.SGS || '140:00');
    } else {
      // New round: reset defaults
      resetForm();
    }
  }, [editingRound]);
  
// Function to reset form fields to their default values
  function resetForm() {
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0];
    setDate(formattedDate);
    setCourse('');
    setType('practice');
    setHoles('18');
    setStrokes(80);
    setMinutes(60);
    setSeconds('00');
    setSGS('140:00');
    setNotes('');
  }

  useEffect(() => {
    // Update speedgolf score (SGS) on strokes/min/seconds change
    const s = parseInt(strokes, 10);
    const m = parseInt(minutes, 10);
    const secs = seconds.toString().padStart(2, '0');
    setSGS(`${s + m}:${secs}`);
  }, [strokes, minutes, seconds]);

  if (!open) return null;

  // Submits either ADD_ROUND or UPDATE_ROUND
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!date || !course) {
      alert('Please fill in required fields: date and course');
      return;
    }
    const roundData = { date, course, type, holes, strokes, minutes, seconds, SGS, notes };

    if (editingRound) {
      dispatch({
        type: 'UPDATE_ROUND',
        payload: { ...roundData, roundNum: editingRound.roundNum },
      });
    } else {
      dispatch({ type: 'ADD_ROUND', payload: roundData });
    }

    onClose();
  };

  return (
    <div
      id="roundsDialogBox"
      className="dialog-container"
      role="dialog"
      aria-modal="true"
      aria-labelledby="roundFormHeader"
      style={{ display: 'block' }}
    >
     
      <h1 id="roundFormHeader" className="dialog-header">
        {editingRound ? 'Edit Round' : 'Add Round'}
      </h1>

      <form id="logRoundForm" className="centered" onSubmit={handleSubmit} noValidate>
        <div className="mb-3">
          <label htmlFor="roundDate" className="form-label">
            Date:
            <input
              id="roundDate"
              className="form-control centered"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </label>
          <div className="form-text">Enter a valid date</div>
        </div>

        <div className="mb-3">
          <label htmlFor="roundCourse" className="form-label">
            Course:
            <input
              id="roundCourse"
              className="form-control centered"
              type="text"
              maxLength="50"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              required
            />
          </label>
          <div className="form-text">Enter a course name of at most 50 characters</div>
        </div>

        <div className="mb-3">
          <label htmlFor="roundType" className="form-label">
            Type:
            <select
              id="roundType"
              className="form-control centered"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="practice">Practice</option>
              <option value="tournament">Tournament</option>
            </select>
          </label>
        </div>

        <div className="mb-3">
          <label htmlFor="roundHoles" className="form-label">
            Holes:
            <select
              id="roundHoles"
              className="form-control centered"
              value={holes}
              onChange={(e) => setHoles(e.target.value)}
            >
              <option value="9">9</option>
              <option value="18">18</option>
            </select>
          </label>
        </div>

        <div className="mb-3">
          <label htmlFor="roundStrokes" className="form-label">
            Strokes:
            <input
              id="roundStrokes"
              className="form-control centered"
              type="number"
              min="9"
              max="200"
              value={strokes}
              onChange={(e) => setStrokes(e.target.value)}
              required
            />
          </label>
          <div className="form-text">Enter a strokes value between 9 and 200</div>
        </div>

        <div className="mb-3">
          <label htmlFor="roundTime" className="form-label">
            Time (minutes:seconds):
            <br />
            <input
              id="roundMinutes"
              type="number"
              min="10"
              max="400"
              value={minutes}
              onChange={(e) => setMinutes(e.target.value)}
              style={{ textAlign: 'right', width: '80px' }}
              required
            />
            :
            <input
              id="roundSeconds"
              type="number"
              min="0"
              max="59"
              value={seconds}
              onChange={(e) => {
                let val = e.target.value.padStart(1, '0');
                setSeconds(val);
              }}
              style={{ textAlign: 'right', width: '60px' }}
              required
            />
          </label>
          <div className="form-text">
            Enter a minutes value between 10 and 400, and a seconds value between 0 and 59
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="roundSGS" className="form-label">
            Speedgolf Score:
            <br />
            <input
              id="roundSGS"
              className="form-control centered"
              type="text"
              value={SGS}
              disabled
            />
          </label>
        </div>

        <div className="mb-3">
          <label htmlFor="roundNotes" className="form-label">
            Notes:
            <br />
            <textarea
              id="roundNotes"
              className="form-control"
              rows="6"
              maxLength="500"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </label>
          <div className="form-text">
            Enter optional round notes of up to 500 characters
          </div>
        </div>

       
        <div className="dialog-btn-container">
          <button
            id="roundFormSubmitBtn"
            className="dialog-primary-btn action-dialog action-button"
            type="submit"
          >
            <span
              id="roundFormSubmitBtnIcon"
              className={editingRound ? 'fa fa-edit' : 'fa fa-save'}
            />
            &nbsp;
            {editingRound ? 'Update Round' : 'Add Round'}
          </button>

          <button
            id="roundsModeLogCancelBtn"
            className="dialog-cancel-btn action-dialog cancel-button"
            type="button"
            onClick={onClose}
          >
            <span className="fa fa-window-close" />
            &nbsp;Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default RoundFormDialog;
