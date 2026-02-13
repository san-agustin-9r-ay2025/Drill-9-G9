    function findArea() {
        let base_value = document.getElementById("enter_base").value;
        let height_value = document.getElementById("enter_height").value;
        let area_value = Number(base_value) * Number(height_value) / 2;
        document.getElementById("equals_to_area").value = area_value;
    }