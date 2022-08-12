const modalTemplate = (text = '') =>
  `<div class="modal">
      <div class="modal-body">
        <p>${text}</p>
        <button>Close</button>
      </div>
    </div>`;

export default modalTemplate;
