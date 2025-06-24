
        const mangGoc = [1, 2, 3, 4, 5, "a", "b", "c"];

        function daoNguocMang(arr) {
            const mangMoi = [];
            
            for (let i = arr.length - 1; i >= 0; i--) {
                mangMoi.push(arr[i]);
            }
            return mangMoi;
        }

        const mangDaDaoNguoc = daoNguocMang(mangGoc);

        console.log("Mảng gốc:", mangGoc);
        console.log("Mảng sau khi đảo ngược:", mangDaDaoNguoc);

        document.getElementById('mang-ban-dau').textContent = JSON.stringify(mangGoc);
        document.getElementById('mang-ket-qua').textContent = JSON.stringify(mangDaDaoNguoc);
