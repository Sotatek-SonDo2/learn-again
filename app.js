        function calculateAge() {
            const year = parseInt(document.getElementById('year').value);
            const month = parseInt(document.getElementById('month').value);
            const day = parseInt(document.getElementById('day').value);
            const hour = parseInt(document.getElementById('hour').value) || 0;
            const minute = parseInt(document.getElementById('minute').value) || 0;
            const second = parseInt(document.getElementById('second').value) || 0;

            if (isNaN(year) || isNaN(month) || isNaN(day)) {
                alert("Vui lòng nhập đầy đủ Năm, Tháng, Ngày sinh.");
                return;
            }


            
            const birthDate = new Date(year, month - 1, day, hour, minute, second);
            const now = new Date();

            let ageYears = now.getFullYear() - birthDate.getFullYear();
            const monthDiff = now.getMonth() - birthDate.getMonth();
            if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < birthDate.getDate())) {
                ageYears--;
            }

            const diffMilliseconds = now.getTime() - birthDate.getTime();
            const diffSeconds = Math.floor(diffMilliseconds / 1000);
            const diffMinutes = Math.floor(diffMilliseconds / (1000 * 60));
            const diffHours = Math.floor(diffMilliseconds / (1000 * 60 * 60));
            const diffDays = Math.floor(diffMilliseconds / (1000 * 60 * 60 * 24));

            document.getElementById('result_years').value = ageYears;
            document.getElementById('result_days').value = diffDays.toLocaleString('en-US');
            document.getElementById('result_hours').value = diffHours.toLocaleString('en-US');
            document.getElementById('result_minutes').value = diffMinutes.toLocaleString('en-US');
            document.getElementById('result_seconds').value = diffSeconds.toLocaleString('en-US');
        }

        function resetForm() {
            document.getElementById('ageForm').reset();
            document.getElementById('result_years').value = '';
            document.getElementById('result_days').value = '';
            document.getElementById('result_hours').value = '';
            document.getElementById('result_minutes').value = '';
            document.getElementById('result_seconds').value = '';
        }