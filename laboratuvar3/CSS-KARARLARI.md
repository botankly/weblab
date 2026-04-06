# CSS Kararları

## 1. Breakpoint Seçimi
- **Neden 640px ve 1024px seçtim?**
  Bu değerler modern web standartlarında tablet (small styles) ve masaüstü (large styles) arasındaki en yaygın geçiş noktalarıdır. 640px küçük tabletleri, 1024px ise standart dizüstü bilgisayar ekranlarını hedeflemek için idealdir.
- **İçeriğim bu noktalarda nasıl değişiyor?**
  640px noktasında "Hakkımda" bölümü dikeyden yatay düzene geçer ve navigasyon menüsü genişler. 1024px noktasında ise içerik genişliği (`max-width`) sınırlanır ve proje kartları 3 sütunlu tam masaüstü düzenine oturur.

## 2. Layout Tercihleri
- **Header için neden Flexbox seçtim?**
  Header, logo ve menü elemanlarını tek bir eksen (yatay) üzerinde hizalamayı gerektirdiği için Flexbox bu iş için en uygun ve esnek çözümdür. `justify-content: space-between` ile elemanları kolayca iki uca yaslayabildim.
- **Proje kartları için neden Grid seçtim?**
  Grid, iki boyutlu (satır ve sütun) mizanpaj yönetimi için tasarlandığı için kart diziliminde Flexbox'tan daha güçlüdür. Kartların yüksekliklerini otomatik eşlemek ve karmaşık boşlukları yönetmek Grid ile çok daha hatasızdır.
- **auto-fit mi auto-fill mi kullandım, neden?**
  `auto-fit` kullandım çünkü proje sayımız az olsa bile kartların mevcut alanı tamamen kaplamasını ve boşlukları dengeli bir şekilde doldurmasını istedim. Bu, görsel bütünlüğü koruyor.

## 3. Design Tokens
- **Hangi renk paletini seçtim ve neden?**
  Yazılım dünyasının modern atmosferini yansıtan koyu bir tema (dark mode) seçtim. Ana vurgu rengi olarak `#535bf2` (vibrant blue) kullanarak profesyonel ve enerjik bir duruş sağladım.
- **Spacing skalasını nasıl belirledim?**
  Modular bir boşluk skalası (0.25rem'den 12rem'e kadar) belirledim. Bu sayede tüm sayfa boyunca boşluklar (margin/padding) tesadüfi değil, birbirinin katı olan tutarlı bir sistemle ilerliyor.
- **Fluid typography için clamp değerlerini nasıl ayarladım?**
  `clamp(minimum, tercih edilen, maksimum)` formülünü kullanarak yazıların mobil ve masaüstü arasında ekran boyutuna göre otomatik büyümesini sağladım. Bu, medya sorgularına bağımlılığı azaltarak daha akıcı bir okuma deneyimi sundu.

## 4. Responsive Stratejiler
- **Mobile-first yaklaşımını nasıl uyguladım?**
  CSS dosyamda tüm temel stilleri herhangi bir medya sorgusu olmadan (küçük ekranlar için) yazdım. Masaüstü özelliklerini sadece `min-width` kullanarak ekleyerek kod yükünü azalttım ve performans kazandım.
- **Hangi elemanlar breakpoint'lerde değişiyor?**
  Navigasyon listesi (dikeyden yataya), "Hakkımda" konteyneri (column'dan row'a) ve proje ızgarası (tek sütundan çoklu sütuna) en belirgin değişim gösteren bölümlerdir.
- **Görsel boyutları nasıl yönettim?**
  Profil fotoğrafında `aspect-ratio: 1` ve `object-fit: cover` kullanarak görsellerin her boyutta bozulmadan kalmasını sağladım. Proje görsellerinde ise Grid konteynerına uyum sağlaması için `width: 100%` kullandım.
