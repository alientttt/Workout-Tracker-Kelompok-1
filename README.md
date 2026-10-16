# Workout-Tracker-Tugas-Kelompok-RPL

Aplikasi pencatatan kebugaran (*Progressive Web App*) yang dirancang untuk membebaskan beban kognitif pengguna melalui pencatatan instan dan manajemen waktu istirahat otomatis yang dinamis. 

## Dokumentasi Rekayasa Perangkat Lunak
Seluruh rancangan sistem mengacu pada dokumen Spesifikasi Kebutuhan Perangkat Lunak (SRS) format Karl E. Wiegers.

* **SRS Workout Tracker R7U.pdf**

* Use-Case Diagram = **https://viewer.diagrams.net/?tags=%7B%7D&lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1&title=Workout%20Tracker%20UML.drawio&dark=0#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1S8-kwnaQ87zqc-WnmriI1eAlsApcZrdT%26export%3Ddownload**

* Activity Diagram = **https://viewer.diagrams.net/?tags=%7B%7D&lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1&title=Workout%20Tracker%20UML.drawio&page-id=wphwWem6zCR-5-3TY6mO&dark=0#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1S8-kwnaQ87zqc-WnmriI1eAlsApcZrdT%26export%3Ddownload**

* Sequence diagram = **https://viewer.diagrams.net/?tags=%7B%7D&lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1&title=Workout%20Tracker%20UML.drawio&page-id=BDUC9B4Ka45RGMvuJBSI&dark=0#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1S8-kwnaQ87zqc-WnmriI1eAlsApcZrdT%26export%3Ddownload**

* State Diagram = **https://viewer.diagrams.net/?tags=%7B%7D&lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1&title=Workout%20Tracker%20UML.drawio&page-id=Ss9P4KM2mU-TYMSNOm5J&dark=0#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1S8-kwnaQ87zqc-WnmriI1eAlsApcZrdT%26export%3Ddownload**

* Class diagram = **https://viewer.diagrams.net/?tags=%7B%7D&lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1&title=Workout%20Tracker%20UML.drawio&page-id=idYWPQMBtuiGAbN6In8x&dark=0#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1S8-kwnaQ87zqc-WnmriI1eAlsApcZrdT%26export%3Ddownload**

* Object Diagram = **https://viewer.diagrams.net/?tags=%7B%7D&lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1&title=Workout%20Tracker%20UML.drawio&page-id=JmrnkE4_oKIYCmquLA2O&dark=0#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1S8-kwnaQ87zqc-WnmriI1eAlsApcZrdT%26export%3Ddownload**

* Deployment Diagram = ****

* UI/UX = **https://www.figma.com/design/bLD93lcf4aAWGGwjs1GyIw/Workout-Tracker?node-id=0-1&t=J1UMHtXI62J4fwxR-1**

## Anggota Kelompok 1
* **Akmal Mahesa** - *202343501641*
* **Ifal Maulana** - *202343501627*
* **Zahra Aulia Salsabila** - *202343501626*

## Fitur Utama
* **One-Tap Logging:** Antarmuka tombol penyelesaian berukuran besar untuk menyimpan rekam jejak repetisi dan beban secara instan.
* **Auto-Rest Timer:** Logika asinkronus yang langsung menghitung mundur waktu istirahat dan memicu *haptic feedback* sesaat setelah set diselesaikan.
* **Exercise Swap:** Navigasi penukaran urutan gerakan secara dinamis dengan rekomendasi substitusi kelompok otot yang sama.
* **Dashboard Analytics:** Visualisasi metrik *Progressive Overload* dan riwayat *Personal Record* (PR) pengguna.

## Arsitektur & Teknologi
Sistem ini menggunakan arsitektur *Decoupled* (pemisahan Frontend dan Backend) yang dieksekusi secara efisien menggunakan ekosistem JavaScript:
* **Frontend:** React dengan Tailwind CSS.
* **Backend:** Node.js (Express) *.
* **Storage:** Sinkronisasi *Cloud Database* eksternal dengan retensi *Web Storage API* (localStorage) untuk akses *offline*.

