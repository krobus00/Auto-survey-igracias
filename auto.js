let pilihan = 1 //pilih jawaban ke-1
for (let a of document.querySelectorAll("[id='radioX']")) {
	a.querySelectorAll("[type='radio']")[pilihan - 1].checked = true
}
