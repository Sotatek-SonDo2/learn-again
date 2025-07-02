document.addEventListener('DOMContentLoaded', () => {
    const yearInput = document.getElementById('year');
    const monthInput = document.getElementById('month');
    const dayInput = document.getElementById('day');
    const calculateBtn = document.getElementById('calculateBtn');
    const resetBtn = document.getElementById('resetBtn');
    const ageYearsSpan = document.getElementById('ageYears');
    const ageDaysSpan = document.getElementById('ageDays');

    
    const now = new Date(2025, 5, 30);

    calculateBtn.addEventListener('click', () => {
        const birthYear = parseInt(yearInput.value);
        const birthMonth = parseInt(monthInput.value) - 1; 
        const birthDay = parseInt(dayInput.value);

        if (isNaN(birthYear) || isNaN(birthMonth) || isNaN(birthDay) || birthYear <= 0 || birthMonth < 0 || birthMonth > 11 || birthDay <= 0 || birthDay > 31) {
            alert('Vui lòng nhập đầy đủ và chính xác ngày sinh (Năm, Tháng, Ngày).');
            return;
        }

        const birthDate = new Date(birthYear, birthMonth, birthDay);

        if (birthDate > now) {
            alert('Ngày sinh không thể lớn hơn ngày hiện tại.');
            return;
        }

        let ageInYears = now.getFullYear() - birthDate.getFullYear();
        const monthDiff = now.getMonth() - birthDate.getMonth();
        const dayDiff = now.getDate() - birthDate.getDate();

        if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
            ageInYears--;
        }

        const diffTime = Math.abs(now - birthDate);
        const ageInDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        ageYearsSpan.textContent = ageInYears;
        ageDaysSpan.textContent = ageInDays;
    });

    resetBtn.addEventListener('click', () => {
        yearInput.value = '';
        monthInput.value = '';
        dayInput.value = '';
        ageYearsSpan.textContent = '...';
        ageDaysSpan.textContent = '...';
    });
});