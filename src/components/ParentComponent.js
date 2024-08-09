import React, { useState } from 'react';
import ReminderModal from './ReminderModal';

const ParentComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSave = (date, time, frequency) => {
    const reminderDateTime = new Date(`${date}T${time}`);
    const now = new Date();
    const timeUntilReminder = reminderDateTime - now;

    if (timeUntilReminder < 0) {
      alert('The reminder time is in the past. Please choose a future time.');
      return;
    }

    switch (frequency) {
      case 'once':
        setTimeout(() => {
          alert('Reminder: It\'s time!');
          // Here you can implement a notification system
        }, timeUntilReminder);
        break;
      case 'daily':
        setInterval(() => {
          if (now.getDate() !== reminderDateTime.getDate()) {
            return; // Skip if it's not the correct day
          }
          alert('Daily Reminder: It\'s time!');
          // Implement notification
        }, 24 * 60 * 60 * 1000); // Check every day
        break;
      case 'weekly':
        setInterval(() => {
          const dayOfWeek = reminderDateTime.getDay();
          if (now.getDay() !== dayOfWeek) {
            return; // Skip if it's not the correct day
          }
          alert('Weekly Reminder: It\'s time!');
          // Implement notification
        }, 7 * 24 * 60 * 60 * 1000); // Check every week
        break;
      default:
        break;
    }

    // Close the modal after saving
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={() => setIsModalOpen(true)}>Open Reminder Modal</button>
      <ReminderModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSave}
        onCancel={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default ParentComponent;
