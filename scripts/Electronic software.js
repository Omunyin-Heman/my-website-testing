document.addEventListener('DOMContentLoaded', function() {
    const patientForm = document.getElementById('assessment-form');
    const patientList = document.querySelector('.patient-list');
    const appointmentCalendar = document.querySelector('.appointment-calendar');
    const reportList = document.querySelector('.report-list');

    // Mock data for initial patient list, appointments, and reports
    let patients = [
        { id: 1, name: 'John Doe', dob: '1985-06-15', phone: '+1234567890', email: 'john.doe@example.com' },
        { id: 2, name: 'Jane Smith', dob: '1990-08-25', phone: '+1987654321', email: 'jane.smith@example.com' }
    ];

    let appointments = [
        { id: 1, date: '2024-07-01', time: '10:00 AM', patientId: 1, reason: 'Consultation' },
        { id: 2, date: '2024-07-03', time: '02:30 PM', patientId: 2, reason: 'Follow-up' }
    ];

    let reports = [
        { id: 1, type: 'Monthly Performance', data: 'Total Patients: 10, Consultations: 20', date: '2024-06-30' }
    ];

    // Initialize page with existing data
    renderPatients();
    renderAppointments();
    renderReports();

    // Function to render patient list
    function renderPatients() {
        patientList.innerHTML = '';
        patients.forEach(patient => {
            const patientCard = document.createElement('div');
            patientCard.classList.add('patient-card');
            patientCard.innerHTML = `
                <h3>${patient.name}</h3>
                <p>Date of Birth: ${patient.dob}</p>
                <p>Phone: ${patient.phone}</p>
                <p>Email: ${patient.email}</p>
                <a href="#patient-details" class="btn">View Details</a>
            `;
            patientList.appendChild(patientCard);
        });
    }

    // Function to render appointment calendar
    function renderAppointments() {
        appointmentCalendar.innerHTML = '';
        appointments.forEach(appointment => {
            const appointmentCard = document.createElement('div');
            appointmentCard.classList.add('appointment-card');
            appointmentCard.innerHTML = `
                <h3>${appointment.date} ${appointment.time}</h3>
                <p>Patient: ${getPatientName(appointment.patientId)}</p>
                <p>Reason: ${appointment.reason}</p>
                <a href="#edit-appointment" class="btn">Edit Appointment</a>
            `;
            appointmentCalendar.appendChild(appointmentCard);
        });
    }

    // Function to render reports
    function renderReports() {
        reportList.innerHTML = '';
        reports.forEach(report => {
            const reportCard = document.createElement('div');
            reportCard.classList.add('report-card');
            reportCard.innerHTML = `
                <h3>${report.type}</h3>
                <p>${report.data}</p>
                <p>Date: ${report.date}</p>
                <a href="#view-report" class="btn">View Report</a>
            `;
            reportList.appendChild(reportCard);
        });
    }

    // Function to get patient name by ID
    function getPatientName(patientId) {
        const patient = patients.find(patient => patient.id === patientId);
        return patient ? patient.name : 'Unknown';
    }

    // Event listener for submitting nutritional assessment form
    patientForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const patientName = patientForm.querySelector('#patient-name').value;
        const dietaryIntake = patientForm.querySelector('#dietary-intake').value;
        const anthropometricMeasurements = patientForm.querySelector('#anthropometric-measurements').value;

        // Simulate saving assessment (can be sent to backend in real implementation)
        console.log(`Assessment submitted for ${patientName}: Dietary Intake - ${dietaryIntake}, Measurements - ${anthropometricMeasurements}`);

        // Clear form fields after submission
        patientForm.reset();
    });

});