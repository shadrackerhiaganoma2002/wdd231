document.addEventListener('DOMContentLoaded', function() {
    // --- Common Functionality ---

    // Set current year in footer
    const currentYearSpan = document.getElementById('currentyear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // --- Specific to join.html ---
    // Check if we are on the join.html page
    if (window.location.pathname.includes('join.html')) {
        // Timestamp for hidden field
        const timestampField = document.getElementById('timestamp');
        if (timestampField) {
            const now = new Date();
            // Format as ISO string for machine readability
            timestampField.value = now.toISOString();
        }

        // Modal functionality
        const modalButtons = document.querySelectorAll('.membership-card button[data-modal-target]');
        const closeButtons = document.querySelectorAll('dialog .close-modal');

        modalButtons.forEach(button => {
            button.addEventListener('click', () => {
                const modalId = button.dataset.modalTarget;
                const modal = document.getElementById(modalId);
                if (modal) {
                    modal.showModal(); // Display the dialog as a modal
                }
            });
        });

        closeButtons.forEach(button => {
            button.addEventListener('click', () => {
                const dialog = button.closest('dialog'); // Find the parent dialog
                if (dialog) {
                    dialog.close(); // Close the dialog
                }
            });
        });

        // Optional: Close modal if clicking outside the dialog content (on the backdrop)
        // The <dialog> element inherently handles this, but explicit handling can be useful
        // if you disable default behavior or need custom logic.
        // For standard <dialog>, this often isn't strictly necessary but doesn't hurt.
        document.querySelectorAll('dialog').forEach(dialog => {
            dialog.addEventListener('click', (event) => {
                if (event.target === dialog) { // Only if the click is directly on the dialog (backdrop)
                    dialog.close();
                }
            });
        });
    }

    // --- Specific to thankyou.html ---
    // Check if we are on the thankyou.html page
    if (window.location.pathname.includes('thankyou.html')) {
        const params = new URLSearchParams(window.location.search);

        // Function to display parameter safely
        function displayParam(elementId, paramName) {
            const element = document.getElementById(elementId);
            if (element) {
                element.textContent = params.get(paramName) || 'N/A';
            }
        }

        // Display required form fields
        displayParam('display-fname', 'fname');
        displayParam('display-lname', 'lname');
        displayParam('display-email', 'email');
        displayParam('display-phone', 'phone');
        displayParam('display-orgname', 'orgname');

        // Special handling for timestamp to format it
        const rawTimestamp = params.get('timestamp');
        const displayTimestampElement = document.getElementById('display-timestamp');
        if (displayTimestampElement && rawTimestamp) {
            try {
                const dateObj = new Date(rawTimestamp);
                // Format for user-friendly display (e.g., "June 3, 2025 at 5:01 PM")
                displayTimestampElement.textContent = dateObj.toLocaleString();
            } catch (e) {
                console.error("Error parsing timestamp:", e);
                displayTimestampElement.textContent = 'Invalid Date';
            }
        } else if (displayTimestampElement) {
            displayTimestampElement.textContent = 'N/A';
        }
    }
});