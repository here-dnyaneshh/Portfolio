



function toggleCard(header) {
      const education_list = header.parentElement;
      education_list.classList.toggle("open");

      const plus = header.querySelector(".plus");
      plus.textContent = education_list.classList.contains("open") ? "−" : "+";
    }
