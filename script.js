document.addEventListener("DOMContentLoaded", function () {

    // VIEW PAGE

    const hazardSection =
        document.getElementById("hazardSection");

    const viewHazardBtn =
        document.getElementById("viewHazardBtn");

    const backBtn =
        document.getElementById("backBtn");

    viewHazardBtn.addEventListener("click", () => {

        hazardSection.style.display = "block";

        document.querySelector(".hazard-preview")
            .style.display = "none";

        document.querySelector(".dashboard-container")
            .style.display = "none";

        document.querySelector(".bottom-chart")
            .style.display = "none";

        document.querySelector(".total-card")
            .style.display = "none";

    });

    backBtn.addEventListener("click", () => {

        hazardSection.style.display = "none";

        document.querySelector(".hazard-preview")
            .style.display = "block";

        document.querySelector(".dashboard-container")
            .style.display = "grid";

        document.querySelector(".bottom-chart")
            .style.display = "block";

        document.querySelector(".total-card")
            .style.display = "block";

    });

    // DATA DEPARTMENT

    const dataDepartment = [

        {
            nama: "Corporate Safety",
            total: 40,
            mengisi: 38
        },

        {
            nama: "Sustainability",
            total: 35,
            mengisi: 30
        },

        {
            nama: "HC Administration",
            total: 32,
            mengisi: 28
        },

        {
            nama: "HC Strategic",
            total: 28,
            mengisi: 22
        },

        {
            nama: "Patria Center",
            total: 25,
            mengisi: 20
        }

    ];

    // PIE

    new Chart(document.getElementById("pieChart"), {

        type: "doughnut",

        data: {

            labels: [
                "Sudah Mengisi",
                "Belum Mengisi"
            ],

            datasets: [{

                data: [36, 24],

                backgroundColor: [
                    "#24557a",
                    "#b9dfff"
                ]

            }]

        }

    });

    // TABLE TOP TIER

    const tableBody =
        document.getElementById("tableBody");

    dataDepartment.forEach((dept, index) => {

        const persen = (
            dept.mengisi / dept.total * 100
        ).toFixed(0);

        tableBody.innerHTML += `

      <tr>

        <td>${index + 1}</td>

        <td>${dept.nama}</td>

        <td>${dept.total}</td>

        <td>${dept.mengisi}</td>

        <td>${persen}%</td>

      </tr>

    `;

    });

    // BAR CHART

    new Chart(document.getElementById("barChart"), {

        type: "bar",

        data: {

            labels:
                dataDepartment.map(item => item.nama),

            datasets: [

                {
                    label: "Sudah Mengisi",

                    data:
                        dataDepartment.map(item => item.mengisi),

                    backgroundColor: "#24557a",

                    borderRadius: 12
                },

                {
                    label: "Belum Mengisi",

                    data:
                        dataDepartment.map(
                            item => item.total - item.mengisi
                        ),

                    backgroundColor: "#b9dfff",

                    borderRadius: 12
                }

            ]

        }

    });

    // DEPARTMENT PIE

    new Chart(document.getElementById("departmentPie"), {

        type: "doughnut",

        data: {

            labels: [
                "Sudah Submit",
                "Belum Submit"
            ],

            datasets: [{

                data: [3, 4],

                backgroundColor: [
                    "#24557a",
                    "#b9dfff"
                ]

            }]

        }

    });

    // TOP SUBMIT

    const submitData = [

        {
            nama: "Nanang Sunaryo",
            total: 10,
            status: "Aktif",
            tanggal: "07 Mei 2026"
        },

        {
            nama: "Bangun Soleh Saputra",
            total: 10,
            status: "Aktif",
            tanggal: "06 Mei 2026"
        },

        {
            nama: "Andrian Kurniawan",
            total: 10,
            status: "Aktif",
            tanggal: "05 Mei 2026"
        },

        {
            nama: "Iqbal Ikhfani Azis",
            total: 10,
            status: "Kurang",
            tanggal: "04 Mei 2026"
        },

        {
            nama: "Triswiyanto",
            total: 9,
            status: "Kurang",
            tanggal: "-"
        }

    ];

    const submitTable =
        document.getElementById("submitTable");

    submitData.forEach((item, index) => {

        const badge =
            item.status === "Aktif"
                ? "success"
                : "danger";

        submitTable.innerHTML += `

      <tr>

        <td>${index + 1}</td>

        <td>${item.nama}</td>

        <td>${item.total}</td>

        <td>
          <span class="${badge}">
            ${item.status}
          </span>
        </td>

        <td>${item.tanggal}</td>

      </tr>

    `;

    });

    // SUBMIT CHART

    new Chart(document.getElementById("submitChart"), {

        type: "bar",

        data: {

            labels:
                submitData.map(item => item.nama),

            datasets: [{

                label: "Jumlah Submit",

                data:
                    submitData.map(item => item.total),

                backgroundColor: [
                    "#24557a",
                    "#3b82b8",
                    "#4b97d1",
                    "#73b3e7",
                    "#b9dfff"
                ],

                borderRadius: 12

            }]

        }

    });

    // YEAR TREND

    new Chart(document.getElementById("yearTrendChart"), {

        type: "line",

        data: {

            labels: [
                "April",
                "Mei",
                "Juni",
                "Juli",
                "Agustus"
            ],

            datasets: [

                {
                    label: "Corporate Safety",

                    data: [12, 19, 15, 25, 30],

                    borderColor: "#24557a",

                    backgroundColor: "rgba(36,85,122,0.2)",

                    tension: 0.4,

                    fill: true
                },

                {
                    label: "Sustainability",

                    data: [10, 15, 18, 20, 28],

                    borderColor: "#3b82b8",

                    backgroundColor: "rgba(59,130,184,0.2)",

                    tension: 0.4,

                    fill: true
                }

            ]

        }

    });

    const searchSection =
        document.getElementById("searchSection");

    const viewSearchBtn =
        document.getElementById("viewSearchBtn");

    const backSearchBtn =
        document.getElementById("backSearchBtn");

    viewSearchBtn.addEventListener("click", () => {

        searchSection.style.display = "block";

        document.querySelector(".hazard-preview")
            .style.display = "none";

        document.querySelector(".dashboard-container")
            .style.display = "none";

        document.querySelector(".bottom-chart")
            .style.display = "none";

        document.querySelector(".total-card")
            .style.display = "none";

    });

    backSearchBtn.addEventListener("click", () => {

        searchSection.style.display = "none";

        document.querySelector(".hazard-preview")
            .style.display = "block";

        document.querySelector(".dashboard-container")
            .style.display = "grid";

        document.querySelector(".bottom-chart")
            .style.display = "block";

        document.querySelector(".total-card")
            .style.display = "block";

    });

    // WORKER

    const workerNames = [

        "Maman Supriyatna",
        "Aris Setiawan",
        "Joko Mardiono",
        "Mukhlisin",
        "Bangun Soleh Saputra",
        "Nanang Sunaryo",
        "Andrian Kurniawan",
        "Iqbal Ikhfani Azis",
        "Triswiyanto"

    ];

    const workerTable =
        document.getElementById("workerTable");

    workerNames.forEach((nama, index) => {

        const randomSubmit =
            Math.floor(Math.random() * 10) + 1;

        workerTable.innerHTML += `

    <tr>

      <td>${index + 1}</td>

      <td>${nama}</td>

      <td>${randomSubmit}</td>

    </tr>

  `;

    });

    // SEARCH

    const searchWorker =
        document.getElementById("searchWorker");

    searchWorker.addEventListener("keyup", function () {

        const keyword =
            searchWorker.value.toLowerCase();

        const rows =
            document.querySelectorAll("#workerTable tr");

        rows.forEach(row => {

            const nama =
                row.children[1]
                    .textContent
                    .toLowerCase();

            if (nama.includes(keyword)) {

                row.style.display = "";

            } else {

                row.style.display = "none";

            }

        });

    });

    // TOTAL CHART

    new Chart(document.getElementById("totalChart"), {

        type: "bar",

        data: {

            labels: ["PLANT", "OFFICE"],

            datasets: [

                {
                    label: "Submit",
                    data: [20, 15],
                    backgroundColor: "#24557a"
                },

                {
                    label: "Belum",
                    data: [67, 55],
                    backgroundColor: "#b9dfff"
                }

            ]

        },

        options: {

            responsive: true,

            indexAxis: "y",

            scales: {
                x: { stacked: true },
                y: { stacked: true }
            }

        }

    });

    // PLANT CHART

    new Chart(document.getElementById("plantChart"), {

        type: "doughnut",

        data: {
            labels: ["Submit", "Belum"],

            datasets: [{
                data: [20, 67],

                backgroundColor: [
                    "#24557a",
                    "#b9dfff"
                ]
            }]
        }

    });

    // OFFICE CHART

    new Chart(document.getElementById("officeChart"), {

        type: "doughnut",

        data: {
            labels: ["Submit", "Belum"],

            datasets: [{
                data: [15, 55],

                backgroundColor: [
                    "#24557a",
                    "#b9dfff"
                ]
            }]
        }

    });

    // PLANT BAR

    new Chart(document.getElementById("plantBar"), {

        type: "bar",

        data: {
            labels: ["APR", "MEI", "JUN", "JUL"],

            datasets: [{
                data: [20, 17, 13, 9],
                backgroundColor: "#3b82b8",
                borderRadius: 14
            }]
        }

    });

    // OFFICE BAR

    new Chart(document.getElementById("officeBar"), {

        type: "bar",

        data: {
            labels: ["APR", "MEI", "JUN", "JUL"],

            datasets: [{
                data: [15, 12, 9, 6],
                backgroundColor: "#24557a",
                borderRadius: 14
            }]
        }

    });

    // SEARCH CHART

    new Chart(
        document.getElementById("unsafeCompareChart"),
        {

            type: "bar",

            data: {

                labels: [
                    "Unsafe Action",
                    "Unsafe Condition"
                ],

                datasets: [{

                    label: "Jumlah",

                    data: [430, 10],

                    backgroundColor: [
                        "#24557a",
                        "#8ec5eb"
                    ],

                    borderRadius: 12

                }]

            },

            options: {

                responsive: true,

                plugins: {
                    legend: {
                        display: false
                    }
                }

            }

        }
    );

});