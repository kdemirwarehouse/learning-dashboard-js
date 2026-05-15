# Learning Dashboard

Bu proje; **HTML, CSS ve JavaScript** öğrenmek için hazırlanmış basit bir öğrenme panelidir.

Kullanıcı input alanına öğrenmek istediği konuyu yazar, **Add Topic** butonuna basar ve konu listeye eklenir. Her konunun yanında bulunan **Delete** butonu ile konu listeden silinebilir.

Bu proje daha sonra **React** ile yeniden geliştirilecektir.

---

## Proje Amacı

Bu repoda amaç sadece kod yazmak değil, aynı zamanda web geliştirmenin temel mantığını öğrenmektir.

Bu proje üzerinde öğrenilen temel konular:

- HTML ile sayfa iskeleti oluşturma
- CSS ile görünüm ve hizalama yapma
- JavaScript ile kullanıcı etkileşimi oluşturma
- DOM üzerinden HTML elemanlarını seçme
- Input değerini alma
- Listeye eleman ekleme
- Listeden eleman silme
- Console üzerinden JavaScript çıktısını takip etme

---

## Kullanılan Teknolojiler

- HTML
- CSS
- JavaScript
- VS Code
- Live Server

---

## Dosya Yapısı

```text
learning-dashboard-js/
│
├── index.html
├── style.css
├── script.js
├── README.md
└── .gitignore
```

---

## Nasıl Çalıştırılır?

Projeyi bilgisayarına indirdikten sonra klasörü VS Code ile aç.

Ardından `index.html` dosyasına sağ tıkla ve:

```text
Open with Live Server
```

seçeneğine tıkla.

Tarayıcıda proje açıldıktan sonra JavaScript çıktılarını görmek için:

```text
Sağ tık > İncele > Console
```

adımlarını takip edebilirsin.

---

## Öğrenilen JavaScript Kavramları

### `document`

HTML sayfasının JavaScript tarafındaki temsilidir.

```js
document.getElementById("topicInput");
```

Bu kod, HTML içinde `id="topicInput"` olan elemanı seçer.

### `addEventListener`

Bir olay gerçekleştiğinde kod çalıştırmak için kullanılır.

```js
addBtn.addEventListener("click", function () {
  console.log("Butona tıklandı.");
});
```

### `DOMContentLoaded`

HTML tamamen yüklendikten sonra JavaScript kodlarının çalışmasını sağlar.

```js
document.addEventListener("DOMContentLoaded", function () {
  // Kodlar burada çalışır
});
```

### `array`

Birden fazla veriyi tutmak için kullanılır.

```js
let topics = ["HTML", "CSS", "JavaScript"];
```

### `push`

Array içine yeni eleman ekler.

```js
topics.push("React");
```

### `splice`

Array içinden eleman siler.

```js
topics.splice(index, 1);
```

### `createElement`

JavaScript ile yeni HTML elemanı oluşturur.

```js
const li = document.createElement("li");
```

### `appendChild`

Oluşturulan elemanı başka bir HTML elemanının içine ekler.

```js
topicList.appendChild(li);
```

---

## Özellikler

- Konu ekleme
- Konu silme
- Boş input kontrolü
- Console çıktıları ile kod takibi
- Basit ve sade arayüz

---

## Sonraki Hedefler

Bu projenin devamında şu konular eklenecek:

- Enter tuşu ile konu ekleme
- LocalStorage ile verileri tarayıcıda saklama
- React'e geçiş
- Component yapısı
- State kullanımı
- Props mantığı
- Projeyi internete yayınlama

---

## Not

Bu proje öğrenme amaçlıdır. Kodlar özellikle sade tutulmuştur.
