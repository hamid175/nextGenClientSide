
export function calculateTimeRemaining(deadlineVal) {
    if (!deadlineVal) {
        return 0;
      }
    const deadline = new Date(`${deadlineVal}`).getTime();
    const now = new Date().getTime();
    return Math.max(deadline - now, 0);
  }

export function formatTime(time) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);
  
    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }
