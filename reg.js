document.addEventListener('DOMContentLoaded', () => {
    const authTabs = document.querySelectorAll('.auth-tab');
    const authForms = document.querySelectorAll('.auth-form-container');
    const roleOptions = document.querySelectorAll('.role-option input');
    const roleTitle = document.getElementById('role-title');
    const roleSubtitle = document.getElementById('role-subtitle');
    const roleIcon = document.getElementById('role-icon');

    // Tab switching functionality
    authTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            authTabs.forEach(t => t.classList.remove('active'));
            authForms.forEach(f => f.classList.remove('active'));
            tab.classList.add('active');
            document.getElementById(tab.dataset.tab).classList.add('active');
        });
    });

    // Initial state: show Restaurant info
    updateLeftPanel('restaurant');

    // Role selection functionality
    roleOptions.forEach(option => {
        option.addEventListener('change', () => {
            const selectedRole = document.querySelector('input[name="role"]:checked').value;
            updateLeftPanel(selectedRole);
            updateFormFields(selectedRole);
        });
    });

    function updateLeftPanel(role) {
        let title, subtitle, iconSrc;

        switch (role) {
            case 'restaurant':
                title = 'Join as Restaurant';
                subtitle = 'Reduce food waste and help your community';
                iconSrc = 'image_b465c0.png'; // Replace with actual Restaurant icon
                break;
            case 'ngo':
                title = 'Join as NGO';
                subtitle = 'Access surplus food to help those in need';
                iconSrc = 'Screenshot 2025-09-11 065650.png'; // Replace with actual NGO icon
                break;
            case 'donor':
                title = 'Join as Donor';
                subtitle = 'Share surplus food with others';
                iconSrc = 'https://via.placeholder.com/60/FF5733'; // Placeholder for Donor icon
                break;
            case 'receiver':
                title = 'Join as Receiver';
                subtitle = 'Access free food from donors';
                iconSrc = 'https://via.placeholder.com/60/33FF57'; // Placeholder for Receiver icon
                break;
        }

        roleTitle.textContent = title;
        roleSubtitle.textContent = subtitle;
        roleIcon.src = iconSrc;
    }

    function updateFormFields(role) {
        const allRoleFields = document.querySelectorAll('.role-field');
        allRoleFields.forEach(field => field.style.display = 'none');

        // Show fields based on the selected role
        if (role === 'restaurant' || role === 'donor') {
            document.getElementById('org-name').style.display = 'block';
            document.getElementById('org-type').style.display = 'block';
        }
        if (role === 'ngo' || role === 'receiver') {
            const foodPreferencesField = document.querySelector('.role-field.ngo.receiver');
            if (foodPreferencesField) {
                foodPreferencesField.style.display = 'block';
            }
        }
        if (role === 'receiver') {
            document.getElementById('student-id').style.display = 'block';
        }
    }
});