document.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById('register-form');
    const roleSelector = document.getElementById('role-selector');
    const roleCards = document.querySelectorAll('.role-card');
    const createAccountBtn = document.getElementById('create-account-btn');
    const passwordInput = document.getElementById('password');
    const passwordMeter = document.getElementById('password-meter');
    const passwordRulesList = document.querySelector('.password-rules ul');
    const conditionalFieldsContainer = document.querySelector('.conditional-fields');
    const modal = document.getElementById('success-modal');

    let currentRole = null;
    let formValues = {
        restaurant: {},
        ngo: {}
    };

    // Helper functions
    const isEmailValid = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const getPasswordStrength = (password) => {
        let score = 0;
        const rules = [
            /.{8,}/, // min 8 characters
            /[A-Z]/,  // uppercase
            /[a-z]/,  // lowercase
            /\d/,     // number
            /[^A-Za-z0-9]/ // special character
        ];

        let validRules = 0;
        rules.forEach((rule, index) => {
            const ruleElement = passwordRulesList.children[index];
            if (rule.test(password)) {
                validRules++;
                ruleElement.classList.add('valid');
            } else {
                ruleElement.classList.remove('valid');
            }
        });

        score = (validRules / rules.length) * 100;
        return score;
    };

    const updatePasswordMeter = () => {
        const password = passwordInput.value;
        const strength = getPasswordStrength(password);

        passwordMeter.style.width = `${strength}%`;
        passwordMeter.classList.remove('weak', 'medium', 'strong');

        if (strength > 0) {
            if (strength < 50) {
                passwordMeter.classList.add('weak');
            } else if (strength < 100) {
                passwordMeter.classList.add('medium');
            } else {
                passwordMeter.classList.add('strong');
            }
        }
    };

    const validateField = (input) => {
        let isValid = true;
        let errorMessage = '';

        if (input.required && input.value.trim() === '') {
            isValid = false;
            errorMessage = `${input.previousElementSibling.innerText} is required.`;
        } else if (input.type === 'email' && !isEmailValid(input.value)) {
            isValid = false;
            errorMessage = 'Enter a valid email address.';
        } else if (input.id === 'password') {
            const strength = getPasswordStrength(input.value);
            if (strength < 100) {
                isValid = false;
                errorMessage = 'Password does not meet all requirements.';
            }
        } else if (input.id === 'confirmPassword') {
            if (input.value !== passwordInput.value) {
                isValid = false;
                errorMessage = 'Passwords do not match.';
            }
        }

        const errorSpan = document.getElementById(input.getAttribute('aria-describedby'));
        if (isValid) {
            input.classList.remove('is-invalid');
            input.classList.add('is-valid');
            if (errorSpan) {
                errorSpan.textContent = '';
                errorSpan.classList.remove('show');
                input.removeAttribute('aria-invalid');
            }
        } else {
            input.classList.remove('is-valid');
            input.classList.add('is-invalid');
            if (errorSpan) {
                errorSpan.textContent = errorMessage;
                errorSpan.classList.add('show');
                input.setAttribute('aria-invalid', 'true');
            }
        }
        return isValid;
    };

    const validateForm = () => {
        let formIsValid = true;
        const inputs = form.querySelectorAll('input:required');
        inputs.forEach(input => {
            if (!validateField(input)) {
                formIsValid = false;
            }
        });
        
        createAccountBtn.disabled = !formIsValid;
        return formIsValid;
    };
    
    // Event Listeners
    roleCards.forEach(card => {
        card.addEventListener('click', () => {
            const role = card.dataset.role;

            // Save current form values before switching
            if (currentRole) {
                const fields = form.querySelectorAll('input');
                fields.forEach(field => {
                    formValues[currentRole][field.name] = field.value;
                });
                const selectedChips = form.querySelectorAll('.chip[aria-pressed="true"]');
                formValues[currentRole]['foodPreferences'] = Array.from(selectedChips).map(chip => chip.dataset.value);
            }

            // Update UI
            roleCards.forEach(c => {
                c.classList.remove('selected', 'animate');
                c.setAttribute('aria-checked', 'false');
            });
            card.classList.add('selected');
            setTimeout(() => card.classList.add('animate'), 10);
            card.setAttribute('aria-checked', 'true');
            currentRole = role;

            // Update conditional fields with a smooth height transition
            conditionalFieldsContainer.style.height = conditionalFieldsContainer.scrollHeight + 'px';
            setTimeout(() => {
                const showForNgo = role === 'ngo';
                conditionalFieldsContainer.dataset.role = showForNgo ? 'ngo' : '';
                conditionalFieldsContainer.style.height = showForNgo ? conditionalFieldsContainer.scrollHeight + 'px' : '0';
                conditionalFieldsContainer.style.overflow = 'hidden';
            }, 220); // Sync with CSS transition
            setTimeout(() => conditionalFieldsContainer.style.overflow = '', 440);

            // Restore saved form values
            if (formValues[currentRole]) {
                const fields = form.querySelectorAll('input');
                fields.forEach(field => {
                    if (formValues[currentRole][field.name] !== undefined) {
                        field.value = formValues[currentRole][field.name];
                    }
                });

                const chips = form.querySelectorAll('.chip');
                chips.forEach(chip => {
                    chip.setAttribute('aria-pressed', 'false');
                    if (formValues[currentRole].foodPreferences && formValues[currentRole].foodPreferences.includes(chip.dataset.value)) {
                        chip.setAttribute('aria-pressed', 'true');
                    }
                });
            }

            // Re-validate to update button state
            validateForm();
        });
    });

    form.addEventListener('input', (e) => {
        // Live validation
        validateField(e.target);
        validateForm(); // Re-check whole form to update button state
        if (e.target.id === 'password') {
            updatePasswordMeter();
        }
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (validateForm()) {
            // Simulate confetti burst and success
            console.log('Form submission successful!');
            console.log('Submitted data:', {
                role: currentRole,
                ...Object.fromEntries(new FormData(form)),
                foodPreferences: Array.from(document.querySelectorAll('.chip[aria-pressed="true"]')).map(chip => chip.dataset.value)
            });

            // Simulate API call and success response
            // For this demo, we just show the modal
            openModal();
            // TODO: Add confetti animation here
            form.reset();
            roleCards.forEach(c => { c.classList.remove('selected', 'animate'); c.setAttribute('aria-checked', 'false'); });
        } else {
            console.log('Form has errors, submission blocked.');
            const formCard = document.querySelector('.form-card');
            formCard.classList.add('shake');
            setTimeout(() => formCard.classList.remove('shake'), 320);
        }
    });
    
    // Chip selection logic
    const chipsContainer = document.getElementById('foodPreferences');
    if (chipsContainer) {
        chipsContainer.addEventListener('click', (e) => {
            const chip = e.target.closest('.chip');
            if (!chip) return;
            const isSelected = chip.getAttribute('aria-pressed') === 'true';
            if (chip.dataset.value === 'any') {
                // 'Any' deselects all others
                chipsContainer.querySelectorAll('.chip').forEach(c => c.setAttribute('aria-pressed', 'false'));
                chip.setAttribute('aria-pressed', 'true');
            } else {
                // Other chips toggle individually and deselect 'any'
                chip.setAttribute('aria-pressed', String(!isSelected));
                const anyChip = chipsContainer.querySelector('[data-value="any"]');
                if (anyChip) anyChip.setAttribute('aria-pressed', 'false');
            }
        });
    }

    // Modal logic
    const openModal = () => {
        modal.classList.add('open');
        setTimeout(() => {
            modal.querySelector('.modal-content').focus();
        }, 10);
    };

    window.closeModal = () => {
        modal.classList.remove('open');
    };

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
});