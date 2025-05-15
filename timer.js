let TotalSeconds = 3600;

function DisplayTime(seconds) {
    const hrs = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    return `${hrs}:${mins}:${secs}`;
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('timer').textContent = DisplayTime(TotalSeconds);
    const countdown = setInterval(() => {
        TotalSeconds--;
        document.getElementById('timer').textContent = DisplayTime(TotalSeconds);

        if (TotalSeconds <= 0) {
            clearInterval(countdown);
            document.getElementById('timer').textContent = "Time's Up!";
        }
    }, 1000);
});
