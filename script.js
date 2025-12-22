
/* ===============================
    Verb Matrix — v4.0 (Kılavuz ve İpucu Düzeltmeleri)
    =============================== */

/* ---------------- Varsayılan Veri --------------- */
let data = {
  // YENİ: Sınıflar Yapısı (A1, A2, B1 listesi)
  classes: [
    { id: 'A1', name: 'A1 (Başlangıç)', nameDE: 'A1 (Anfänger)' },
    { id: 'A2', name: 'A2 (Temel)', nameDE: 'A2 (Grundlagen)' },
    { id: 'B1', name: 'B1 (Orta)', nameDE: 'B1 (Mittelstufe)' },
    { id: 'B2', name: 'B2 (Orta İleri)', nameDE: 'B2 (Obere Mittelstufe)' },
    { id: 'C1', name: 'C1 (Uzman)', nameDE: 'C1 (Fortgeschrittenes Niveau)' },
    { id: 'K', name: '⭐ Karma Mod', nameDE: '⭐ Mixed Mode' },
    { id: 'MIXED', name: '⭐ Karışık Mod (Özel)' }
  ],

  domains: [
    { id: 'gunluk', name: 'Günlük Hayat', nameDE: 'Alltag' },
    { id: 'mesleki', name: 'Mesleki Almanca', nameDE: 'Beruf' },
    { id: 'gramer', name: 'Gramer', nameDE: 'Grammatik' }
  ],
  
  categories: [
    { 
        id: 'c_gunluk', 
        name: 'GÜNLÜK HAYAT', 
        domain_id: 'gunluk',
        group_ids: [
            'g1', 'g2', 'g3', 'g4', 'g5', 'g6', 'g7', 'g8', 'g9', 'g10', 
            'g11', 'g12', 'g13', 'g14', 'g15', 'g16', 'g17', 'g18', 'g19', 'g20'
        ]
    },
    { 
        id: 'c_mesleki', 
        name: 'MESLEKİ ALMANCA', 
        domain_id: 'mesleki',
        group_ids: [
            'g21', 'g22', 'g23', 'g24', 'g25', 'g26', 'g27', 'g28', 'g29', 'g30',
            'g31', 'g32', 'g33', 'g34', 'g35', 'g36', 'g37'
        ]
    }
  ],


  
  verbs: { g1: [ { id:'v1', verbTR:'Yükleniyor...', verbDE:'Laden...' } ] },
  content: {},
  
// index.html, let data = { ... } bloğunun içi
groups: [
    // --- GÜNLÜK HAYAT (1 - 20) ---
    { id: 'g1', name: 'ALGI & İLETİŞİM (Wahrnehmung & Kommunikation)', description: 'görmek, dinlemek, göstermek' },
    { id: 'g2', name: 'BESLENME & ZEVK (Ernährung & Genuss)', description: 'getirmek, tadı gelmek, yemek' },
    { id: 'g3', name: 'İLETİŞİM & YAZIŞMA (Kommunikation & Korrespondenz)', description: 'cevap vermek, okumak, yazmak' },
    { id: 'g4', name: 'ÖĞRENME & AÇIKLAMA (Lernen & Erklären)', description: 'açıklamak, öğrenmek, seyretmek' },
    { id: 'g5', name: 'YARATICILIK & YAPIM (Kreativität & Herstellung)', description: 'vermek, yapmak, yardım etmek' },
    { id: 'g6', name: 'HAREKET & TAKİP (Bewegung & Folgen)', description: 'alıp getirmek, almak, takip etmek' },
    { id: 'g7', name: 'İHTİYAÇ & TEDARİK (Bedarf & Beschaffung)', description: 'eksik olmak, göndermek, ihtiyaç duymak' },
    { id: 'g8', name: 'TİCARET & DEĞİŞİM (Handel & Austausch)', description: 'ait olmak, satın almak, satmak' },
    { id: 'g9', name: 'KEŞİF & ARAŞTIRMA (Entdeckung & Forschung)', description: 'bulmak, karşılaşmak, tavsiye etmek' },
    { id: 'g10', name: 'ARAMA & ULAŞMA (Suchen & Erreichen)', description: 'aramak, söz vermek, uymak' },
    { id: 'g11', name: 'DUYGUSAL BAĞ (Emotionale Bindung)', description: 'hediye etmek, hoşuna gitmek, sevmek' },
    { id: 'g12', name: 'TERCİH & BEĞENİ (Präferenz & Vorliebe)', description: 'dilemek, güvenmek, hoşlanmak' },
    { id: 'g13', name: 'HAFIZA & KAYIP (Gedächtnis & Verlust)', description: 'acımak, ağrımak, ödünç vermek, unutmak' },
    { id: 'g14', name: 'KAYIP & BULMA (Verlust & Finden)', description: 'faydalı olmak, kaybetmek, ödünç almak/vermek' },
    { id: 'g15', name: 'ALMA & EDİNME (Bekommen & Erhalten)', description: 'almak, elde etmek, teklif/ikram etmek, teşekkür etmek' },
    { id: 'g16', name: 'ERİŞİM & KONTROL (Zugang & Kontrolle)', description: 'açmak, anlatmak, tebrik etmek' },
    { id: 'g17', name: 'KAPAMA & KORUMA (Schließen & Schutz)', description: 'kapatmak, tedarik etmek, zarar vermek' },
    { id: 'g18', name: 'SES & DUYUM (Schall & Gehör)', description: 'duymak, göndermek, tehdit etmek' },
    { id: 'g19', name: 'İÇECEK & TÜKETİM (Getränk & Konsum)', description: 'içmek, önce davranmak, yanında getirmek' },
    { id: 'g20', name: 'SUÇ & AFFETME (Verbrechen & Vergebung)', description: 'affetmek, çalmak, soymak' },

    // --- MESLEKİ ALMANCA (21 - 37) ---
    { id: 'g21', name: 'PAKET TESLİM SÜRECİ (Paketzustellung)', description: 'almak, toplamak, yardım etmek, teslim etmek' },
    { id: 'g22', name: 'ADRES BULMA VE YÖNLENDİRME (Adressfindung & Navigation)', description: 'aramak, takip etmek, göstermek' },
    { id: 'g23', name: 'BELGE VE İMZA İŞLEMLERİ (Dokumente & Unterschrift)', description: 'imzalamak, teşekkür etmek, uzatmak' },
    { id: 'g24', name: 'İLETİŞİM VE BİLDİRİM (Kommunikation & Benachrichtigung)', description: 'taramak, cevap vermek, göndermek' }, 
    { id: 'g25', name: 'YÜKLEME VE PAKETLEME (Verladen & Verpacken)', description: 'yüklemek, güvenmek, vermek' }, 
    { id: 'g26', name: 'TAŞIMA VE TRANSFER (Transport & Übergabe)', description: 'taşımak, rastlamak, götürmek' }, 
    { id: 'g27', name: 'SINIFLANDIRMA VE DÜZENLEME (Klassifizierung & Sortierung)', description: 'sınıflandırmak, dinlemek, açıklamak' }, 
    { id: 'g28', name: 'KONTROL VE DENETLEME (Kontrolle & Prüfung)', description: 'kontrol etmek, yardım etmek, göstermek' }, 
    { id: 'g29', name: 'YER BULMA VE TESPİT (Ortung & Feststellung)', description: 'bulmak, takip etmek, söylemek' }, 
    { id: 'g30', name: 'ARAÇ BAKIMI VE HAZIRLIK (Fahrzeugwartung & Vorbereitung)', description: 'kontrol etmek, güvenmek, vermek' }, 
    { id: 'g31', name: 'PARK VE YAKIT İŞLEMLERİ (Parken & Kraftstoff)', description: 'park etmek, teşekkür etmek, teslim etmek' }, 
    { id: 'g32', name: 'ENERJİ VE ŞARJ (Energie & Aufladung)', description: 'yakıt almak, yardım etmek, götürmek' }, 
    { id: 'g33', name: 'ŞARJ VE YÜKLEME (Aufladung & Verladen)', description: 'yüklemek, şarj etmek, güvenmek, uzatmak' }, 
    { id: 'g34', name: 'PAKETLEME VE HAZIRLIK (Verpackung & Vorbereitung)', description: 'paketlemek, dinlemek, göndermek' }, 
    { id: 'g35', name: 'YÜKLEME VE BOŞALTMA (Be- und Entladen)', description: 'yüklemek, cevap vermek, teslim etmek' }, 
    { id: 'g36', name: 'AÇMA VE KAPAMA (Öffnen & Schließen)', description: 'açmak, rastlamak, göstermek' }, 
    { id: 'g37', name: 'KAPAMA VE RAPORLAMA (Abschluss & Berichterstattung)', description: 'kapatmak, teşekkür etmek, rapor etmek' } 
  ],
// 1. YENİ KONU HAVUZU (50 Madde)
"topicPool": {
    "1": "KİŞİ ZAMİRLERİ (Personalpronomen)",
    "2": "KİŞİ ZAMİRİ NESNELERİ (Objektpronomen)",
    "3": "NESNELER TEKİL (Objekte Singular)",
    "4": "NESNELER ÇOĞUL (Objekte Plural)",
    "5": "EMİR CÜMLELERİ (Imperativ)",
    "6": "SIFAT ÇEKİMLERİ (Adjektivdeklination)",
    "7": "SAHİPLİK ZAMİRLERİ (Possessivpronomen)",
    "8": "W-FRAGEN (Fragewörter)",
    "9": "OLUMSUZ - kein/nicht (Negation)",
    "10": "EDATLAR",
    "11": "ZARFLAR (Adverbien - Temel)",
    "12": "PERFEKT (haben/sein + Partizip II)",
    "13": "MODAL VERBEN (können, müssen, wollen...)",
    "14": "AKK+DAT KULLANIMI (Çift Nesne)",
    "15": "PRÄTERITUM (war, hatte, ging...)",
    "16": "WEIL-CÜMLELERİ (Neden)",
    "17": "WENN-CÜMLELERİ (Şart - Realis)",
    "18": "DASS-CÜMLELERİ (ki - Nebensatz)",
    "19": "ZAMAN İFADELERİ (Temporale Angaben)",
    "20": "PLUSQUAMPERFEKT (hatte/war + Partizip II)",
    "21": "FUTUR I (werden + Infinitiv)",
    "22": "PASSİV PRÄSENS (wird/werden + Partizip II)",
    "23": "PASSİV PERFEKT (ist/sind + Partizip II + worden)",
    "24": "KONJUNKTIV II - Basit (würde, könnte, hätte)",
    "25": "WENN - Irrealis (Konjunktiv II ile şart)",
    "26": "OBWOHL (Rağmen - Konzessiv)",
    "27": "RELATIVSÄTZE (İlgi Cümleleri)",
    "28": "DOLAYLI ANLATIM - Basit (dass-Sätze)",
    "29": "SUPERLATIV (Üstünlük - am besten, der größte)",
    "30": "FUTUR II (werden + Partizip II + haben/sein)",
    "31": "KONJUNKTIV II - Geçmiş (hätte/wäre + Partizip II)",
    "32": "PASSİV + MODAL (muss/kann + Partizip II + werden)",
    "33": "İSİMLEŞTİRME (Nominalisierung)",
    "34": "PARTIZIP SIFATLAR (Partizipien als Adjektive)",
    "35": "WÄHREND (İken - Gleichzeitigkeit)",
    "36": "DAMIT / UM...ZU (Amaç)",
    "37": "JE...DESTO (Ne kadar...o kadar)",
    "38": "İLERİ EDATLAR (trotz, wegen, während...)",
    "39": "MODAL + PERFEKT (haben + Infinitiv + müssen/können)",
    "40": "KONJUNKTIV I (Indirekte Rede - Haber Kipi)",
    "41": "PASİF ALTERNATİFLERİ (man, sich lassen, sein+zu)",
    "42": "PARTIZIPIALKONSTRUKTIONEN (Erweiterte Partizipien)",
    "43": "FUNKTIONSVERBGEFÜGE (zur Verfügung stellen...)",
    "44": "NOMINALISIERTE İNFİNİTİVE (beim Arbeiten...)",
    "45": "TRENNBARE VERBEN İLERİ (Kompleks ayrılabilen fiiller)",
    "46": "KONZESSIVE KONNEKTOREN (obgleich, wenngleich...)",
    "47": "ADVERSATIVE KONNEKTOREN (jedoch, hingegen...)",
    "48": "REFLEXIVE VERBEN (sich vorbereiten, sich melden...)",
    "49": "KAUSAL/KONDITIONAL KOMPLEKS (angenommen dass...)",
    "50": "KOMPLEXE SATZGEFÜGE (Mehrfache Nebensätze)"
  },
  "topics": {
    "A1": {
      "1": "KİŞİ ZAMİRLERİ (Personalpronomen)",
      "3": "NESNELER TEKİL (Objekte Singular)",
      "4": "NESNELER ÇOĞUL (Objekte Plural)",
      "5": "EMİR CÜMLELERİ (Imperativ)",
      "7": "SAHİPLİK ZAMİRLERİ (Possessivpronomen)",
      "8": "W-FRAGEN (Fragewörter)",
      "9": "OLUMSUZ - kein/nicht (Negation)",
      "11": "ZARFLAR (Adverbien - Temel)"
    },
    "A2": {
      "2": "KİŞİ ZAMİRİ NESNELERİ (Objektpronomen)",
      "10": "EDATLAR",
      "12": "PERFEKT (haben/sein + Partizip II)",
      "13": "MODAL VERBEN (können, müssen, wollen...)",
      "15": "PRÄTERITUM (war, hatte, ging...)",
      "14": "AKK+DAT KULLANIMI (Çift Nesne)",
      "6": "SIFAT ÇEKİMLERİ (Adjektivdeklination)",
      "16": "WEIL-CÜMLELERİ (Neden)",
      "17": "WENN-CÜMLELERİ (Şart - Realis)",
      "18": "DASS-CÜMLELERİ (ki - Nebensatz)"
    },
    "B1": {
      "19": "ZAMAN İFADELERİ (Temporale Angaben)",
      "20": "PLUSQUAMPERFEKT (hatte/war + Partizip II)",
      "21": "FUTUR I (werden + Infinitiv)",
      "22": "PASSİV PRÄSENS (wird/werden + Partizip II)",
      "23": "PASSİV PERFEKT (ist/sind + Partizip II + worden)",
      "24": "KONJUNKTIV II - Basit (würde, könnte, hätte)",
      "25": "WENN - Irrealis (Konjunktiv II ile şart)",
      "26": "OBWOHL (Rağmen - Konzessiv)",
      "27": "RELATIVSÄTZE (İlgi Cümleleri)",
      "28": "DOLAYLI ANLATIM - Basit (dass-Sätze)"
    },
    "B2": {
      "29": "SUPERLATIV (Üstünlük - am besten, der größte)",
      "30": "FUTUR II (werden + Partizip II + haben/sein)",
      "31": "KONJUNKTIV II - Geçmiş (hätte/wäre + Partizip II)",
      "32": "PASSİV + MODAL (muss/kann + Partizip II + werden)",
      "33": "İSİMLEŞTİRME (Nominalisierung)",
      "34": "PARTIZIP SIFATLAR (Partizipien als Adjektive)",
      "35": "WÄHREND (İken - Gleichzeitigkeit)",
      "36": "DAMIT / UM...ZU (Amaç)",
      "37": "JE...DESTO (Ne kadar...o kadar)",
      "38": "İLERİ EDATLAR (trotz, wegen, während...)"
    },
    "C1": {
      "39": "MODAL + PERFEKT (haben + Infinitiv + müssen/können)",
      "40": "KONJUNKTIV I (Indirekte Rede - Haber Kipi)",
      "41": "PASİF ALTERNATİFLERİ (man, sich lassen, sein+zu)",
      "42": "PARTIZIPIALKONSTRUKTIONEN (Erweiterte Partizipien)",
      "43": "FUNKTIONSVERBGEFÜGE (zur Verfügung stellen...)",
      "44": "NOMINALISIERTE İNFİNİTİVE (beim Arbeiten...)",
      "45": "TRENNBARE VERBEN İLERİ (Kompleks ayrılabilen fiiller)",
      "46": "KONZESSIVE KONNEKTOREN (obgleich, wenngleich...)",
      "47": "ADVERSATIVE KONNEKTOREN (jedoch, hingegen...)",
      "48": "REFLEXIVE VERBEN (sich vorbereiten, sich melden...)",
      "49": "KAUSAL/KONDITIONAL KOMPLEKS (angenommen dass...)",
      "50": "KOMPLEXE SATZGEFÜGE (Mehrfache Nebensätze)"
    }
  },
  // ... (content, hints, guideText vb. aynı kalacak) ...
  translations: {
    tr: {
      app: { subtitle: 'Fiiller İle Almanca Öğrenme Platformu' },
      menu: {
        calis: '📚 Çalış',
        tekrar: '🔄 Tekrar',
        settings: '⚙️ Ayarlar',
        progress: '📊 İlerleme',
        admin: '🔧 Yönetici'
      },
      titles: {
        start: 'BAŞLA',
        tekrar: '🔄 TEKRAR',
        guide: '⭐ Kullanım Kılavuzu', // YENİ
        groupSelect: 'Grup Seç',
        storySelect: 'Hikaye Seç',
        verbSelect: 'FİİL SEÇ',
        sectionSelect: 'BÖLÜM SEÇ',
        modeSelect: 'MODU SEÇ',
        conversionSelect: 'ÇEVİRİ YÖNÜ',
        learning: '📚 Çalışma', // v4.0 (Dinamik alt başlık)
        story: 'Hikaye',
        storyQuestions: 'Hikaye Soruları',
        settings: '⚙️ Ayarlar',
        progress: '📊 İlerleme',
        adminPanel: '🔧 Yönetici Paneli',
        srsStats: 'Tekrar Durumu',
        totalProgress: 'Toplam Çalışma İlerlemesi'
      },
      buttons: {
        show: 'Göster', next: '→ Sonraki', check: 'Kontrol Et', start: 'Başla',
        previous: '← Önceki', hintToggle: 'Cümle İpucu', 
        questions: '📝 Sorular', playDE: '🔊 Almanca Dinle', playTR: '🔊 Türkçe Dinle',
        importJSON: '📥 İçerik Yükle (JSON)', exportJSON: '📤 İçerik İndir (JSON)',
        importProgress: '📥 İlerleme Yükle', exportProgress: '📤 İlerleme İndir',
        resetSrs: '⚠️ Tüm İilerlemeyi Sıfırla',
        pasteAndLoad: '📥 Yapıştır & Yükle', clear: 'Temizle',
        refreshList: '🔄 Yenile Liste', exportCSV: '📤 TSV İndir (Tablo)',
        save: 'Kaydet', cancel: 'İptal', update: 'Güncelle', add: 'Ekle', delete: 'Sil', edit: 'Düzenle',
        nextSection: '→ Sonraki Bölüm',
        nextVerb: '→ Sonraki Fiil',
        goToStory: '→ Hikayeye Git',
        startStudy: '📖 Çalışmaya Başla',
        forceUpdate: '🔄 Uygulamayı Güncelle',
        pasteAndLoadTsv: 'Yükle ve İşle'
      },
      settings: {
        appearance: '🎨 Görünüm ve Diğer', nightMode: 'Gece Modu', language: 'Dil:', music: 'Müzik:',
        dataManagement: '💾 İçerik Veri Yönetimi',
        progressManagement: '💾 İlerleme Veri Yönetimi',
        appUpdate: '🔄 Uygulama',
        pasteJSONTitle: '📝 JSON Yapıştır (Mobil)',
        pasteJSONDesc: 'İçerik JSON dosyanızı buraya yapıştırın...'
      },
      admin: {
        contentManagement: '📚 İçerik Yönetimi',
        listAllSentences: '📋 Tüm Cümleleri Listele',
        addGroup: 'Grup Ekle/Düzenle', addVerb: 'Fiil Ekle/Düzenle', addSection: 'Konu Ekle/Düzenle',
        editSentence: 'Cümle Ekle/Düzenle', addStory: 'Hikaye Ekle/Düzenle',
        hintManagement: 'İpucu Ekle/Düzenle',
        editGuide: '⭐ Kılavuz Metnini Düzenle', // YENİ
        groupVerbTitle: '🏗️ Toplu Grup & Fiil Yükleme',
        groupVerbDesc: 'Excel\'den kopyaladığınız YENİ GRUP ve FİİL listenizi buraya yapıştırın.<br>Kullanmanız gereken sütun sırası (Sekme/Tab ile ayrılmış):<br><b>GrupID | GrupAdı | FiilID | FiilAdı (TR) | FiilAdı (DE)</b>',
        tsvTitle: '📊 Toplu Cümle Yükleme (Excel\'den Kopyala-Yapıştır)',
        tsvDesc: 'Excel veya Google E-Tablolar\'da hazırladığınız veriyi buraya yapıştırın.<br>Kullanmanız gereken sütun sırası (BAŞLIK SATIRI OLMADAN):<br><b>GrupID | FiilID | BölümNumarası | TR_Cümle | DE_Cümle | CümleIpucu (İsteğe bağlı)</b>'
      },
      labels: {
        group: 'Grup:', verb: 'Fiil:', section: 'Bölüm:', sentence: 'Cümle:', index: 'Index:',
        hintText: 'İpucu metni:', tr: 'TR:', de: 'DE:', title: 'Başlık:', deText: 'DE metin:', trText: 'TR metin:',
        groupID: 'Grup ID (ör: g5):', groupNameTR: 'Ad (TR):', groupNameDE: 'Ad (DE):',
        verbID: 'Fiil ID (örn v10):', verbTR: 'Fiil TR:', verbDE: 'Fiil DE:',
        sectionCode: 'Bölüm Kodu (örn: B1):',
        sectionNum: 'Bölüm Numarası (örn: 1):', sectionName: 'Bölüm Adı (örn: Kişi Zamiri):',
        question: 'Soru:', options: 'Seçenekler (virgülle ayır):',
        correctAnswer: 'Doğru cevap (tam metin):',
        guideTitle: 'Kılavuz Başlığı:', // YENİ
        guideContent: 'Kılavuz İçeriği (Metin):' // YENİ
      },
      placeholders: {
        jsonPaste: 'JSON içeriğinizi buraya yapıştırın...',
        cloze: 'Boşluğu doldurun...',
        quiz: 'Çeviriyi yazın...'
      },
      messages: {
        noGroups: 'Henüz grup yok. JSON yükleyin.',
        noVerbs: 'Bu grupta fiil bulunamadı.',
        noSentences: 'Bu fiil ve bölüm için cümle bulunamadı!',
        noDueCards: 'Bu kategoride tekrar edilecek kart kalmadı! 🎉',
        noNewCards: 'Bu bölümdeki tüm kartları çalıştınız! 🎉',
        noStory: 'Bu grup için hikaye bulunamadı!',
        noStoryAvailable: 'Hikaye Yok',
        noStoryQuestions: 'Bu hikaye için henüz soru yok.',
        noProgress: 'Henüz ilerleme yok.',
        noHints: 'Yok',
        noStoryFound: 'Hikaye bulunamadı',
        ttsNotSupported: 'Tarayıcı TTS desteklemiyor.',
        dataLoaded: '✓ İçerik verisi yüklendi. Grup sayısı:',
        progressLoaded: '✓ İlerleme verisi yüklendi.',
        invalidJSON: '✗ Geçersiz JSON formatı.',
        loadError: '✗ Hata:',
        dataExported: '✓ İçerik verisi (verbmatrix_data.json) indirildi!',
        progressExported: '✓ İlerleme verisi (verbmatrix_ilerleme_data.json) indirildi!',
        srsReset: '✓ Tüm çalışma (SRS) verisi sıfırlandı.',
        jsonStatus: '📊 JSON DURUMU',
        allFieldsError: 'Tüm alanları doldurun',
        hintSaved: '✅ İpucu kaydedildi',
        guideSaved: '✅ Kılavuz metni kaydedildi', // YENİ
        quickEditSaved: '✅ Cümle ve ipucu güncellendi (Yerel olarak kaydedildi)!',
        overrideReset: '✅ İçerik düzeltmeleri silindi. Sayfa yenilendikten sonra varsayılan içeriğe dönülecektir.',
        srsResetConfirm: 'Tüm çalışma (Aralıklı Tekrar) verilerinizi sıfırlamak istediğinizden emin misiniz? Tüm kartların ilerlemesi (Zor, Normal, Öğrendim) silinecektir.',
        totalProgressDesc: 'Tüm içerikteki (cümlelerdeki) ilerleme durumunuz.',
        srsPromotion: '🎉 Tebrikler! Kart "%s" listesine taşındı.',
        srsDemotion: '🤔 Dikkat! Kart "%s" listesine taşındı.'
      },
      srs: {
        zor: '🥵 ZOR',
        normal: '🤔 NORMAL',
        ogrendim: '✅ ÖĞRENDİM',
        zorlandiklarim: 'ZORLANDIKLARIM',
        ogrendiklerim: 'ÖĞRENDİKLERİM'
      },
      modes: {
          cloze: 'Boşluk Doldurma',
          wordorder: 'Kelimeleri Sıralama',
          quiz: 'Quiz (Test)',
          study: 'Çalışma (Yeni Kartlar)'
      }
    },
    de: { // Almanca çeviriler (kısaltıldı)
      app: { subtitle: 'Deutsch-Lernplattform mit Verben' },
      menu: { calis: '📚 Lernen', tekrar: '🔄 Wiederholen', settings: '⚙️ Einstellungen', progress: '📊 Fortschritt', admin: '🔧 Admin' },
      titles: {
        guide: '⭐ Anleitung',
        start: 'START',
        tekrar: '🔄 WIEDERHOLEN',
        settings: '⚙️ Einstellungen',
        progress: '📊 Fortschritt',
        adminPanel: '🔧 Admin-Panel',
        srsStats: 'Lernstatus',
        totalProgress: 'Gesamtfortschritt',
        conversionSelect: 'ÜBERSETZUNG',
        learning: '📚 Lernen' 
      },
      buttons: {
        show: 'Zeigen', next: '→ Nächste', check: 'Prüfen',
        playDE: '🔊 Deutsch hören', playTR: '🔊 Türkisch hören',
        resetSrs: '⚠️ Lernfortschritt zurücksetzen',
        startStudy: '📖 Lernen starten',
        nextSection: '→ Nächste Lektion',
        nextVerb: '→ Nächstes Verb',
        goToStory: '→ Zur Geschichte'
      },
      settings: {
        appearance: '🎨 Ansicht & Sonstiges', nightMode: 'Nachtmodus', language: 'Sprache:', music: 'Musik:',
        dataManagement: '💾 Inhaltsdaten',
        progressManagement: '💾 Fortschrittsdaten',
        appUpdate: '🔄 App'
      },
      admin: {
        editGuide: '⭐ Anleitung bearbeiten'
      },
      labels: {
        guideTitle: 'Anleitung Titel:',
        guideContent: 'Anleitung Inhalt:'
      },
      srs: {
        zor: '🥵 SCHWER',
        normal: '🤔 NORMAL',
        ogrendim: '✅ GEKONNT',
        zorlandiklarim: 'SCHWIERIG',
        ogrendiklerim: 'GEKONNT'
      },
      messages: {
          srsPromotion: '🎉 Super! Karte nach "%s" verschoben.',
          srsDemotion: '🤔 Achtung! Karte nach "%s" verschoben.',
          guideSaved: '✅ Anleitungstext gespeichert.'
      }
    }
  },
  settings: {
    currentClass: null,
    nightMode: false,
    language: 'tr',
    starredTopics: {}
  }
};

// İçerik ve İlerleme Verisi Ayrı Tutuluyor
let srsData = {};
let contentOverride = {};

/* ---------------- State ---------------- */
let state = {
  currentView:'mainMenu',
  viewHistory: ['mainMenu'], // YENİ: Geri butonu için (v4.0)
  group:null, groupData:null,
  verb:null, verbData:null, 
  section:null,
  mode:null,
  tekrarStatus: null,
  deck: [],
  deckPos: 0,
  currentCardKey: null,
  currentCardData: null,
  showAnswer:false,
  wordPool:[], wordSelected:[], userAnswer:'', correctAnswer:'', showResult:false,
  hintPanelVisible: false,
  speechRate: 1.0,
  isSpeaking: false,
  autoPlayAudio: true,
  activeLearningPanel: null // Akordeon durumu
};

/* ---------- Müzik Çalar ---------- */
class MusicPlayer {
  constructor(streamUrl, volumeSliderId, toggleBtnId, settingsSliderId, settingsToggleId) {
    this.audio = new Audio(streamUrl);
    this.audio.crossOrigin = "anonymous";
    this.audio.loop = true;
    this.isPlaying = false;
    this.currentVolume = 0.7;
    this.dimmedVolume = 0.2;
    this.isDimmed = false;
    this.slider = document.getElementById(volumeSliderId);
    this.toggleBtn = document.getElementById(toggleBtnId);
    this.settingsSlider = document.getElementById(settingsSliderId);
    this.settingsToggleBtn = document.getElementById(settingsToggleId);
    const savedVolume = parseFloat(localStorage.getItem('verbmatrix_music_volume')) || 0.7;
    this.setVolume(savedVolume * 100, true);
    if (this.toggleBtn) this.toggleBtn.addEventListener('click', () => this.toggleMusic());
    if (this.slider) this.slider.addEventListener('input', (e) => this.setVolume(e.target.value));
    if (this.settingsToggleBtn) this.settingsToggleBtn.addEventListener('click', () => this.toggleMusic());
    if (this.settingsSlider) this.settingsSlider.addEventListener('input', (e) => this.setVolume(e.target.value));
  }
  updateUI() {
      const t = getMergedTranslations(data.settings.language || 'tr');
      const isPlaying = this.isPlaying;
      if (this.toggleBtn) this.toggleBtn.textContent = isPlaying ? '⏸️' : '🔊';
      if (this.settingsToggleBtn) {
          this.settingsToggleBtn.textContent = isPlaying ? '⏸️ ' + (t.buttons.pause || 'Durdur') : '🔊 ' + (t.buttons.play || 'Çal');
      }
      const volumeValue = this.currentVolume * 100;
      if (this.slider) this.slider.value = volumeValue;
      if (this.settingsSlider) this.settingsSlider.value = volumeValue;
  }
  toggleMusic() {
    if (this.isPlaying) {
      this.audio.pause();
      this.isPlaying = false;
      console.log("Müzik duraklatıldı.");
    } else {
      this.audio.load();
      this.audio.play().then(() => {
        this.isPlaying = true;
        console.log("Müzik çalınıyor.");
      }).catch(error => {
        console.error("Müzik çalınamadı:", error);
      });
    }
    this.updateUI();
  }
  setVolume(volumeValue, isInit = false) {
    const newVolume = parseFloat(volumeValue) / 100;
    this.currentVolume = newVolume;
    if (!this.isDimmed) {
      this.audio.volume = this.currentVolume;
    }
    if (!isInit) {
        try { localStorage.setItem('verbmatrix_music_volume', this.currentVolume.toString()); } catch (e) {}
    }
    if (this.slider) this.slider.value = volumeValue;
    if (this.settingsSlider) this.settingsSlider.value = volumeValue;
  }
  dim_music(dim) {
    if (!this.isPlaying) return;
    if (dim) {
      this.isDimmed = true;
      this.audio.volume = this.dimmedVolume;
    } else {
      this.isDimmed = false;
      this.audio.volume = this.currentVolume;
    }
  }
}
let musicPlayer = null;

/* ---------- Konuşma Sentezi ---------- */
let speechUtterance = null;
function toggleAutoPlay() {
  state.autoPlayAudio = !state.autoPlayAudio;
  const btn = document.getElementById('autoPlayBtn');
  const led = document.getElementById('autoPlayLed');
  if (btn) {
    if (state.autoPlayAudio) {
      btn.innerHTML = `<span class="led-indicator active" id="autoPlayLed"></span>Otomatik Aktif`;
      if(led) led.classList.add('active'); 
    } else {
      btn.innerHTML = `<span class="led-indicator" id="autoPlayLed"></span>Otomatik Dinle`;
      if(led) led.classList.remove('active');
    }
  }
}
function updateSpeedButtonUI() {
    const ledL = document.getElementById('slowModeLedL');
    const ledS = document.getElementById('slowModeLedS');
    if (state.speechRate === 0.5) {
        if(ledL) ledL.classList.add('active');
        if(ledS) ledS.classList.add('active');
    } else {
        if(ledL) ledL.classList.remove('active');
        if(ledS) ledS.classList.remove('active');
    }
}
function toggleSpeechSpeed() {
    state.speechRate = (state.speechRate === 1.0) ? 0.5 : 1.0;
    updateSpeedButtonUI();
    if (speechUtterance && !speechSynthesis.paused) {
        speechSynthesis.cancel();
        speechSynthesis.speak(speechUtterance);
    }
}
function toggleSpeechPause() {
    if ('speechSynthesis' in window) {
        const btnL = document.getElementById('pauseBtn');
        const btnS = document.getElementById('storyPauseBtn');
        const btn = btnL && btnL.offsetParent !== null ? btnL : btnS;
        if (!btn) return;
        if (speechSynthesis.paused) {
            speechSynthesis.resume();
            btn.textContent = '⏸️ Durdur';
        } else {
            speechSynthesis.pause();
            btn.textContent = '▶️ Oynat';
        }
    }
}
function resetSpeechButtons() {
    if ('speechSynthesis' in window) {
        // Sadece aktif konuşmayı iptal eder, buton durumu yönetimi playCurrentSentence içindedir.
        window.speechSynthesis.cancel();
    }
}

/* ---------- SRS (İlerleme) Veri Yönetimi ---------- */
function getSrsKey(verbId, sectionNum, sentenceIndex) {
    return `${verbId}_s${sectionNum}_${sentenceIndex}`;
}
function loadSrsData() {
    try {
        const data = localStorage.getItem('verbmatrix_srs_data_v3');
        srsData = data ? JSON.parse(data) : {};
    } catch (e) {
        console.error("SRS verisi yüklenemedi", e);
        srsData = {};
    }
    updateProgressView();
}
function saveSrsData() {
    try {
        localStorage.setItem('verbmatrix_srs_data_v3', JSON.stringify(srsData));
    } catch (e) {
        console.error("SRS verisi kaydedilemedi", e);
    }
    updateProgressView();
}
function getCardSrsData(key) {
    if (!srsData[key]) {
        srsData[key] = {
            status: 'new',
            quizHistory: []
        };
    }
    return srsData[key];
}
function exportSrsData() {
    const t = getMergedTranslations(data.settings.language || 'tr');
    const json = JSON.stringify(srsData, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'verbmatrix_ilerleme_data.json';
    a.click();
    URL.revokeObjectURL(url);
    alert(t.messages.progressExported);
}
function importSrsData() {
    const input = document.getElementById('progressFileInput');
    input.onchange = async (e) => {
        const t = getMergedTranslations(data.settings.language || 'tr');
        try {
            const file = e.target.files[0]; if (!file) return;
            const text = await file.text();
            const imported = JSON.parse(text);
            if (Object.keys(imported).length > 0 && typeof Object.values(imported)[0].status !== 'string') {
                 throw new Error("Bu geçerli bir ilerleme dosyası değil.");
            }
            srsData = imported;
            saveSrsData();
            alert(t.messages.progressLoaded);
            updateProgressView();
        } catch (err) {
            alert(`${t.messages.loadError} ${err.message}`);
        }
        input.value = '';
    };
    input.click();
}
function rateCard(newStatus) {
    const cardData = getCardSrsData(state.currentCardKey);
    cardData.status = newStatus;
    cardData.quizHistory = [];
    console.log(`Kart ${state.currentCardKey} -> ${newStatus} olarak ayarlandı.`);
    saveSrsData();
    state.deckPos++;
    state.showAnswer = false;
    showLearning();
}

// YENİ: Düzeltilmiş Quiz Mantığı (v4.0)
function updateSrsStatusAfterQuiz(key, isCorrect, userAnswer) {
    const t = getMergedTranslations(data.settings.language || 'tr');
    const cardData = getCardSrsData(key);
    cardData.quizHistory = cardData.quizHistory || [];
    const history = cardData.quizHistory;
    history.push(isCorrect ? 1 : 0);
    while (history.length > 5) {
        history.shift();
    }
    let newStatus = null;

    // Zor -> Normal (3 defa doğru yerine 2 defa doğru yapalım)
    if (cardData.status === 'zor' && history.length >= 2 && history.slice(-2).every(v => v === 1)) {
        newStatus = 'normal';
    }
    // Normal -> Öğrendim (2 defa doğru)
    else if (cardData.status === 'normal' && history.length >= 2 && history.slice(-2).every(v => v === 1)) {
        newStatus = 'ogrendim';
    }
    // Normal -> Zor (3 defa yanlış yerine 2 defa yanlış yapalım)
    else if (cardData.status === 'normal' && history.length >= 2 && history.slice(-2).every(v => v === 0)) {
        newStatus = 'zor';
    }
    // Öğrendim -> Normal (2 defa yanlış)
    else if (cardData.status === 'ogrendim' && history.length >= 2 && history.slice(-2).every(v => v === 0)) {
        newStatus = 'normal';
    }

    if (newStatus) {
        cardData.status = newStatus;
        cardData.quizHistory = []; // Geçmişi sıfırla
        saveSrsData();
        console.log(`STATÜ DEĞİŞTİ: ${key} -> ${newStatus}`);
        
        const statusMap = {
            zor: t.srs.zorlandiklarim,
            normal: t.srs.normal,
            ogrendim: t.srs.ogrendiklerim
        };
        const messageKey = (newStatus === 'zor') ? 'srsDemotion' : 'srsPromotion';
        const message = (t.messages[messageKey] || '').replace('%s', statusMap[newStatus] || newStatus);
        
        // Desteden bu kartı çıkar
        state.deck = state.deck.filter(deckKey => deckKey !== key);
        
        // Sonucu göster (ama "Sonraki" butonu artık bir sonraki karta atlayacak)
        showResult(isCorrect, userAnswer, message); // userAnswer'ı geçelim
        
        return true; // Statü değiştiğini belirt
    } else {
        saveSrsData(); // Sadece history'yi kaydet
        return false; // Statü değişmedi
    }
}
function resetSrsData() {
    const t = getMergedTranslations(data.settings.language || 'tr');
    if (confirm(t.messages.srsResetConfirm)) {
        srsData = {};
        saveSrsData();
        alert(t.messages.srsReset);
    }
}

/* ---------- İçerik (Content) Veri Yönetimi ---------- */
async function loadDataFromServer() {
    try {
        const response = await fetch('verbmatrix_data.json');
        if (!response.ok) {
            throw new Error(`HTTP hatası! Durum: ${response.status}`);
        }
        const serverData = await response.json();
        data = deepMerge(data, serverData);
        console.log('✅ Sunucudan içerik verisi yüklendi.');
        loadContentOverride();
    } catch (e) {
        console.error("Sunucudan 'verbmatrix_data.json' yüklenemedi. Varsayılan veri kullanılacak.", e);
        loadContentOverride();
    }
}
function loadContentOverride() {
    try {
        const override = localStorage.getItem('verbmatrix_content_override');
        if (override) {
            contentOverride = JSON.parse(override);
            data = deepMerge(data, contentOverride);
            console.log('✅ Yerel içerik düzenlemeleri (Override) yüklendi.');
        } else {
            contentOverride = {};
        }
    } catch (e) {
        console.error("Yerel içerik düzenlemeleri yüklenirken hata:", e);
        localStorage.removeItem('verbmatrix_content_override');
        contentOverride = {};
    }
}
// index.html, saveContentOverride fonksiyonunu bulun ve aşağıdaki ile değiştirin.
function saveContentOverride() {
    // 🚩 BURAYA data.classes EKLENMELİDİR
    const contentToSave = {
        classes: data.classes,  // <--- KRİTİK EKLENTİ
        domains: data.domains,  // <--- BU DA EK BİR GÜNCELLEME
        groups: data.groups,
        verbs: data.verbs,
        content: data.content,
        topicPool: data.topicPool,
        topics: data.topics,    // <--- data.topics de eklendi
        hints: data.hints,
        guideText: data.guideText // YENİ
    };
    
    contentOverride = deepMerge(contentOverride, contentToSave);
    try {
        localStorage.setItem('verbmatrix_content_override', JSON.stringify(contentOverride));
        console.log('✅ İçerik güncellendi ve yerel olarak kaydedildi (Override).');
    } catch (e) {
        console.error("İçerik depolanamadı:", e);
    }
}
function exportData(){
  const t = getMergedTranslations(data.settings.language || 'tr');

  // Dışa aktarılacak veri için bir kopya oluştur
  const dataToExport = { ...data };
  // İstenmeyen anahtarları kaldır
  delete dataToExport.translations;
  delete dataToExport.settings;

  const json = JSON.stringify(dataToExport, null, 2);
  const blob = new Blob([json],{type:'application/json'}); const url = URL.createObjectURL(blob); const a = document.createElement('a');
  a.href = url; a.download = 'verbmatrix_data.json'; a.click(); URL.revokeObjectURL(url);
  alert(t.messages.dataExported);
}
function importData(imported){
    const t = getMergedTranslations(data.settings.language || 'tr');
    try {
        const defaultTranslations = JSON.parse(JSON.stringify(data.translations || {}));
        if (imported.groups && Array.isArray(imported.groups)) {
            imported.groups.forEach(newGroup => {
                const index = data.groups.findIndex(g => g.id === newGroup.id);
                if (index > -1) { data.groups[index] = deepMerge(data.groups[index], newGroup); } 
                else { data.groups.push(newGroup); }
            });
            console.log("Gruplar birleştirildi.");
        }
        if (imported.verbs && typeof imported.verbs === 'object') {
            Object.keys(imported.verbs).forEach(gid => {
                if (!data.verbs[gid]) data.verbs[gid] = [];
                const newVerbs = imported.verbs[gid] || [];
                newVerbs.forEach(newVerb => {
                    const index = data.verbs[gid].findIndex(v => v.id === newVerb.id);
                    if (index > -1) { data.verbs[gid][index] = deepMerge(data.verbs[gid][index], newVerb); } 
                    else { data.verbs[gid].push(newVerb); }
                });
            });
            console.log("Fiiller birleştirildi.");
        }
        if (imported.content && typeof imported.content === 'object') {
            data.content = Object.assign(data.content || {}, imported.content);
            console.log("Cümle içerikleri birleştirildi.");
        }
        if(imported.topicPool) data.topicPool = Object.assign(data.topicPool || {}, imported.topicPool);
        if(imported.topics) data.topics = deepMerge(data.topics || {}, imported.topics);

        if(imported.hints) data.hints = deepMerge(data.hints || {}, imported.hints);
        if(imported.settings) data.settings = Object.assign(data.settings || {}, imported.settings);
        if(imported.guideText) data.guideText = deepMerge(data.guideText || {}, imported.guideText); // YENİ
        if (imported.translations) {
            data.translations = deepMerge(defaultTranslations, imported.translations);
        }
        saveContentOverride();
        alert(`${t.messages.dataLoaded} (Veriler Birleştirildi)\nYeni Toplam Grup Sayısı: ${data.groups.length}`);
        loadSettings();
        showView('mainMenu');
    } catch(err){
        alert(`${t.messages.loadError} ${err.message}`);
    }
}
function importDataFromFile(){
  const input = document.getElementById('fileInput');
  input.onchange = async (e)=>{
    try{
      const file = e.target.files[0]; if(!file) return;
      const text = await file.text();
      const importedJson = JSON.parse(text);
      importData(importedJson);
    } catch(err) {
      const t = getMergedTranslations(data.settings.language || 'tr');
      alert(`${t.messages.loadError} ${err.message}`);
    }
    input.value='';
  };
  input.click();
}
function loadJsonFromTextarea(){
  const txt = document.getElementById('jsonPaste').value.trim();
  const t = getMergedTranslations(data.settings.language || 'tr');
  if(!txt){ alert('JSON yapıştırın'); return; }
  try{
    const importedJson = JSON.parse(txt);
    importData(importedJson);
    document.getElementById('jsonPaste').value='';
  } catch(e){ alert(`${t.messages.loadError} ${e.message}`); }
}

/* ---------- Ayarlar ve Arayüz Fonksiyonları (v4.0) ---------- */

/* --- GÜNCELLENMİŞ SHOWVIEW (Çeviri Yönü Ekranında Sınıf Butonu Gizleme) --- */
function showView(id, isBack = false) {
    if (id === state.currentView && !isBack) return;

    // 1. Ekran Değişimi
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    const el = document.getElementById(id);
    if (el) el.classList.add('active');
    state.currentView = id;

    // 2. Özel Görünüm Güncellemeleri
    if (id === 'adminSentenceListView') renderAllSentencesTable();
    if (id === 'progress' || id === 'tekrarMenu') updateProgressView();
    if (id === 'adminBulkEditView') fillBulkEditSelectors();

    // 3. Tarihçe (History) Yönetimi
    if (!isBack) {
        const menuViews = ['mainMenu', 'groupMenu', 'verbMenu', 'sectionMenu', 'modeMenu', 'tekrarMenu', 'tekrarModeMenu', 'adminView', 'adminContentView', 'adminSentenceListView', 'storyView', 'storyQuestionsView'];
        
        if (id === 'mainMenu') {
            state.viewHistory = ['mainMenu'];
        } else if (id === 'detailViewLayer' || id === 'welcomeView' || id === 'splashScreen') {
            // Bu ekranları geçmişe ekleme
        } else {
            // Sadece menü öğelerini geçmişte tut, diğerlerini temizle
            let baseHistory = state.viewHistory.filter(v => menuViews.includes(v));
            state.viewHistory = baseHistory;
            state.viewHistory.push(id);
        }
    }

   

    // 5. Header / Logo Gizleme
    const headerEl = document.querySelector('.container > header');
    const hideLogo = ['learningView', 'storyView', 'storyQuestionsView', 'detailViewLayer', 'welcomeView', 'splashScreen'].includes(id);
    if (headerEl) headerEl.style.display = hideLogo ? 'none' : 'block';

    // 6. Konuşma Butonlarını Sıfırla
    if (typeof resetSpeechButtons === 'function') resetSpeechButtons();

    // 7. Çalışma Ekranı Özel Ayarları
    if (id === 'learningView') {
        if (typeof updateSpeedButtonUI === 'function') updateSpeedButtonUI();
        if (typeof toggleLearningPanel === 'function') toggleLearningPanel(null);
        
        const acc = document.getElementById('learningControlsAccordion');
        if (acc) acc.style.display = 'block';
        
        const comp = document.getElementById('completionControls');
        if (comp) comp.style.display = 'none';
        
        const actBtn = document.getElementById('actionBtn');
        if (actBtn) actBtn.style.display = 'flex';
    }

    // 8. YÜZEN BUTONLARI YÖNET
    const homeBtn = document.getElementById('floatingHomeBtn');
    const backBtn = document.getElementById('floatingBackBtn');
    const adminBtn = document.getElementById('floatingAdminBtn');
    const classBtn = document.getElementById('classNavBtn');

    // Ana Menü Durumu
    if (id === 'mainMenu') {
        if (homeBtn) homeBtn.style.display = 'none';
        if (backBtn) backBtn.style.display = 'none';
        if (adminBtn) adminBtn.style.display = 'flex'; // Admin butonu flex olmalı
    } else {
        if (homeBtn) homeBtn.style.display = 'flex';
        if (backBtn) backBtn.style.display = 'flex';
        if (adminBtn) adminBtn.style.display = 'none';
    }

    // Sınıf Butonu Gizleme Kuralları
    const hiddenClassViews = [
        'learningView',
        'storyView',
        'storyQuestionsView',
        'welcomeView',
        'splashScreen',
        'modeMenu',
        'tekrarModeMenu',
        'mixedSettingsView' // Karışık mod ayarlarında da gizleyelim
    ];

    if (hiddenClassViews.includes(id)) {
        if (classBtn) classBtn.style.display = 'none';
    } else {
        if (classBtn) {
            classBtn.style.display = 'block';
            if (typeof updateClassNavButton === 'function') updateClassNavButton();
        }
    }

    // 9. Diğer UI Güncellemeleri
    if (id === 'modeMenu' || id === 'tekrarModeMenu') {
        if (typeof updateConversionButtons === 'function') updateConversionButtons();
    }
    
    if (id === 'adminView') {
        const tsvArea = document.getElementById('adminTsvArea');
        const grpArea = document.getElementById('adminGroupVerbArea');
        if (tsvArea) tsvArea.style.display = 'none';
        if (grpArea) grpArea.style.display = 'none';
    }
}
// YENİ: Geri Butonu Fonksiyonu (v4.0)
function goBackInHistory() {
    if (state.viewHistory.length <= 1) {
        showView('mainMenu'); // Güvenlik
        return; 
    }
    state.viewHistory.pop(); // Mevcut view'ı tarihten çıkar
    const prevView = state.viewHistory[state.viewHistory.length - 1]; // Son kalanı al
    showView(prevView, true); // 'isBack' bayrağıyla (tarihe tekrar eklememesi için) göster
}





function getProperty(obj, keyString) {
  if (!keyString) return null;
  return keyString.split('.').reduce((acc, key) => (acc && acc[key] !== undefined) ? acc[key] : null, obj);
}
function getMergedTranslations(lang = 'tr') {
    const defaultLang = 'tr';
    const defaultTranslations = data.translations[defaultLang] || {};
    if (lang === defaultLang || !data.translations[lang] || Object.keys(data.translations[lang]).length === 0) {
        return defaultTranslations;
    }
    return deepMerge(defaultTranslations, data.translations[lang]);
}
function updateUITexts(){
  const lang = data.settings.language || 'tr';
  const t = getMergedTranslations(lang);
  document.querySelectorAll('[data-translate-key]').forEach(el => {
    const key = el.dataset.translateKey;
    const translation = getProperty(t, key);
    if (translation) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        if (el.placeholder !== undefined) el.placeholder = translation;
      } else {
        const firstChild = el.firstChild;
        if (firstChild && (firstChild.tagName === 'SPAN' || firstChild.tagName === 'I' || firstChild.nodeName === '#text')) {
            let textNode = firstChild.nextSibling;
            if (textNode && textNode.nodeType === Node.TEXT_NODE) {
                textNode.textContent = ' ' + translation;
            } else if (!textNode && firstChild.nodeType === Node.TEXT_NODE) {
                firstChild.textContent = translation;
            } else if (textNode) {
                 el.appendChild(document.createTextNode(' ' + translation));
            } else {
                el.textContent = translation;
            }
        } else {
            el.textContent = translation;
        }
      }
    } else {
      console.warn(`Translation key not found: ${key} for lang: ${lang}`);
    }
  });
  if(musicPlayer) musicPlayer.updateUI();
  updateAutoPlayButtonText();
  // Başlıkları manuel güncelleyelim
  const learningTitleEl = document.getElementById('learningTitle');
  if (learningTitleEl) {
      learningTitleEl.textContent = t.titles.learning;
  }
// updateUITexts fonksiyonunun sonuna ekle
  // Eğer Grup menüsündeysek, Grup Menüsünü yeniden yükle (YAMA 3A)
  if (state.currentView === 'groupMenu') {
      loadAndShowGroupMenu();
  }
}
function updateAutoPlayButtonText() {
    const autoPlayBtn = document.getElementById('autoPlayBtn');
    if (autoPlayBtn) {
        if (state.autoPlayAudio) {
            autoPlayBtn.innerHTML = `<span class="led-indicator active" id="autoPlayLed"></span>Otomatik Aktif`;
        } else {
            autoPlayBtn.innerHTML = `<span class.led-indicator" id="autoPlayLed"></span>Otomatik Dinle`;
        }
    }
}
function changeLanguage(lang, btnEl){
  data.settings.language = lang;
  document.querySelectorAll('.lang-btn').forEach(b=>b.classList.remove('active'));
  if(btnEl) btnEl.classList.add('active');
  updateUITexts();
  saveSettings();
}
function toggleNightMode(){
  const body = document.body;
  const on = body.classList.toggle('night-mode');
  data.settings.nightMode = on;
  const toggleCheckbox = document.getElementById('nightModeToggle');
  if(toggleCheckbox) toggleCheckbox.checked = on;
  saveSettings();
}
function saveSettings(){ try{ localStorage.setItem('verbmatrix_settings', JSON.stringify(data.settings)); }catch(e){} }
function loadSettings(){
  try{
    const s = JSON.parse(localStorage.getItem('verbmatrix_settings')||'{}');
    if(s.language) data.settings.language = s.language;
    if(typeof s.nightMode === 'boolean') data.settings.nightMode = s.nightMode;
    if(s.conversionMode) data.settings.conversionMode = s.conversionMode;
  }catch(e){}
  const toggleCheckbox = document.getElementById('nightModeToggle');
  if(toggleCheckbox) toggleCheckbox.checked = !!data.settings.nightMode;
  if(data.settings.nightMode) document.body.classList.add('night-mode');
  document.querySelectorAll('.lang-btn').forEach(b=>b.classList.remove('active'));
  const map = {tr:'langTR', de:'langDE'};
  const btn = document.getElementById(map[data.settings.language]||'langTR');
  if(btn) btn.classList.add('active');
  updateUITexts();
}

/* ---------- Çeviri Yönü (Conversion Mode) ---------- */
function setConversionMode(mode) {
    data.settings.conversionMode = mode;
    saveSettings();
    updateConversionButtons();
}
function updateConversionButtons() {
    const modes = ['mode', 'tekrarMode'];
    const activeMode = data.settings.conversionMode; // tr-de veya de-tr
    modes.forEach(prefix => {
        const trdeBtn = document.getElementById(prefix + 'TRDE');
        const detrBtn = document.getElementById(prefix + 'DETR');
        if (!trdeBtn || !detrBtn) return;
        if (activeMode === 'tr-de') {
            trdeBtn.classList.add('btn-primary');
            trdeBtn.classList.remove('btn-info');
            detrBtn.classList.add('btn-info');
            detrBtn.classList.remove('btn-primary');
        } else {
            trdeBtn.classList.add('btn-info');
            detrBtn.classList.remove('btn-primary');
            detrBtn.classList.add('btn-primary');
            detrBtn.classList.remove('btn-info');
        }
        if (prefix === 'tekrarMode') {
            const trdeLed = trdeBtn.querySelector('.led-indicator');
            const detrLed = detrBtn.querySelector('.led-indicator');
            if (trdeLed && detrLed) {
                if (activeMode === 'tr-de') {
                    trdeLed.classList.add('active');
                    detrLed.classList.remove('active');
                } else {
                    trdeLed.classList.remove('active');
                    detrLed.classList.add('active');
                }
            }
        }
    });
}


/* ---------- AI İpucu Entegrasyonu (v4.0 Güncellemesi) ---------- */
async function getAIHint() {
    const t = getMergedTranslations(data.settings.language || 'tr');
    const currentCard = state.currentCardData;
    const verbData = (data.verbs[state.group] || []).find(v => v.id === state.verb) || { verbTR: 'Bilinmiyor', verbDE: 'Unknown' };

    if (!currentCard) {
        alert("Lütfen önce bir cümle kartı yükleyin.");
        return;
    }

    // Ortak detay görünümünü kullanıyoruz
    showDetailView("🧠 Yapay Zeka İpucu Oluşturuluyor...", 
        "Yükleniyor... Bu işlem birkaç saniye sürebilir."
    );

    const isTrDe = data.settings.conversionMode === 'tr-de';
    const trText = currentCard.tr;
    const deText = currentCard.de;

    const prompt = `
        Sen bir Almanca öğretmenisin ve kullanıcının öğrenme bağlamına uygun detaylı bir dil bilgisi veya kullanım ipucu veriyorsun.
        Cevabın sadece ipucu metninden oluşmalı, başlık veya ek konuşma içermemelidir.
        
        Bağlam:
        - Çalışılan Fiil: ${verbData.verbDE || state.verb} (${verbData.verbTR})
        - Türkçe Cümle: "${trText}"
        - Almanca Cümle: "${deText}"
        - Çeviri Yönü: ${isTrDe ? 'Türkçeden Almancaya çeviri yapılıyor.' : 'Almancadan Türkçeye çeviri yapılıyor.'}
        
        Görevin: Almanca cümledeki **dil bilgisi kuralını (örneğin zamir, edat, kelime sırası)**, fiilin özel kullanımını veya Almanca'ya özel bir nüansı açıklayan, 2-3 paragraf uzunluğunda, derinlemesine ve net bir ipucu metni oluştur. Markdown formatını kullan.
    `;

    try {
        const response = await fetch('http://localhost:3000/api/ai-hint', { 
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ prompt: prompt })
        });

        if (!response.ok) {
            throw new Error(`HTTP Hata: ${response.status} - Sunucu hatası veya Yapay Zeka servisi bağlantı sorunu.`);
        }

        const responseData = await response.json();
        const generatedHint = responseData.text || "Yapay zekadan ipucu alınamadı.";

        // KRİTİK DÜZELTME: generatedHint'i olduğu gibi gönderiyoruz. processGuideMarkdown() bunu biçimlendirecek.
        showDetailView(
            "🧠 Yapay Zeka İpucu (Detaylı Analiz)", 
            generatedHint 
        ); 
        
    } catch (error) {
        console.error("AI İpucu Hatası:", error);
        showDetailView(
            "❌ Yapay Zeka Hatası",
            `**Yapay Zeka İpucu Alınamadı!**
            
            **Hata Nedeni:** **${error.message}**
            
            **ÇÖZÜM İÇİN NOT:** Bu özelliğin çalışması için, Yapay Zeka (Gemini, OpenAI vb.) API anahtarınızı güvenli bir şekilde yöneten, arka planda çalışan bir sunucu (proxy) veya sunucusuz işlev (serverless function) kurmuş olmanız gerekir. Tarayıcınız, \`http://localhost:3000/api/ai-hint\` adresine bağlanmayı denedi.`
        );
    }
}


/* ---------- ANA AKIŞ FONKSİYONLARI (v4.0) ---------- */

/* --- GÜNCELLENMİŞ GRUP MENÜSÜ (SEKMELİ YAPI) --- */

// Hangi sekmenin aktif olduğunu hafızada tutmak için global değişken (veya data.settings içine de alınabilir)
let activeDomainTab = 'all'; // Varsayılan hepsi veya ilk sekme
/* =================================================================
   --- TEKRAR EDEN FONKSİYONLARIN TEMİZLENMİŞ HALLERİ ---
   Eski, tekrar eden tanımları silip bunları yapıştırabilirsiniz.
   ================================================================= */

/**
 * Detay penceresini (AI İpucu, Kılavuz vb.) açar ve içeriği Markdown formatında işler.
 * @param {string} title - Pencerenin başlığı.
 * @param {string} content - Pencerenin içeriği (Markdown destekli).
 */
function showDetailView(title, content) {
    document.getElementById('detailViewTitle').textContent = title;
    document.getElementById('detailViewContent').innerHTML = processGuideMarkdown(content);
    showView('detailViewLayer');
}

/**
 * Yönetici panelinden ayarlanan kullanım kılavuzunu gösterir.
 */
function showGuide() {
    const t = getMergedTranslations(data.settings.language || 'tr');
    const guide = data.guideText || { 
        title: t.titles.guide || 'Kullanım Kılavuzu', 
        content: "Kılavuz metni henüz düzenlenmedi. Admin panelinden düzenleyebilirsiniz." 
    };
    showDetailView(guide.title, guide.content);
}

/**
 * Karışık Mod ayar ekranını (konu listesini) oluşturur ve yıldızları gösterir.
 * @param {string} [filter='all'] - 'all' veya 'starred' olarak filtreleme yapar.
 */
function renderMixedModeList(filter = 'all') {
    const container = document.getElementById('mixedTopicList');
    if (!container) return; 

    container.innerHTML = '';
    
    // Konuları sayısal sıraya göre sırala
    const sortedTopics = Object.entries(data.topicPool).sort(([idA], [idB]) => parseInt(idA) - parseInt(idB));

    sortedTopics.forEach(([id, name]) => {
        const rating = data.settings.starredTopics[id] || 0; 
        
        if (filter === 'starred' && rating === 0) return;

        const btn = document.createElement('button');
        btn.className = 'btn ' + (rating > 0 ? 'btn-warning' : 'btn-secondary');
        
        let starIcons = '';
        for (let i = 0; i < rating; i++) {
            starIcons += '⭐';
        }
        
        btn.innerHTML = `
            <span>${id}. ${name}</span>
            <span style="font-size:1.5rem;">${starIcons || '☆'}</span>
        `;
        
        btn.onclick = () => toggleMixedStar(id, filter); 
        container.appendChild(btn);
    });
}

/**
 * Bir konunun yıldız derecesini (0-3) değiştirir. Tıklandıkça artar, 3'ten sonra sıfırlanır.
 * @param {string} topicId - Değiştirilecek konunun ID'si.
 * @param {string} [currentFilter='all'] - Liste görünümünü korumak için mevcut filtre.
 */
function toggleMixedStar(topicId, currentFilter = 'all') {
    let currentRating = data.settings.starredTopics[topicId] || 0;

    // Döngü: 0 -> 1 -> 2 -> 3 -> 0
    currentRating = (currentRating + 1) % 4;

    if (currentRating === 0) {
        delete data.settings.starredTopics[topicId]; 
    } else {
        data.settings.starredTopics[topicId] = currentRating;
    }
    
    saveSettings(); 
    renderMixedModeList(currentFilter); 
    updateMixedModeCount(); // Buton üzerindeki sayacı da güncelle
}

/**
 * Karışık Mod ayar ekranını açar.
 */
function openMixedSettings() {
    renderMixedModeList('all'); // Her zaman tüm listeyi göstererek başla
    showView('mixedSettingsView');
}

/**
 * Ana menüdeki veya ilgili yerlerdeki "Karışık Mod" sayacını günceller.
 */
function updateMixedModeCount() {
    const count = data.settings.starredTopics ? Object.keys(data.settings.starredTopics).length : 0;
    
    // Hoşgeldin ekranındaki buton için
    const welcomeButtonText = document.querySelector('button[onclick*="mixedSettingsView"]');
    if (welcomeButtonText) {
        // Bu butonu daha spesifik bir ID ile hedeflemek daha iyi olur.
    }

    // Ana menüdeki bir sayaç için (Örnek ID: #btnMixed)
    const btn = document.getElementById('btnMixed'); 
    if(btn) {
        btn.innerHTML = `⭐<small>Karışık Mod (${count})</small>`;
    }
}

function loadAndShowGroupMenu() {
    const container = document.getElementById('groupButtons');
    container.innerHTML = '';
    const t = getMergedTranslations(data.settings.language || 'tr');
    
    // Eğer hiç grup yoksa uyarı ver
    if (!data.groups || data.groups.length === 0) {
        container.innerHTML = `<div class="content-box">${t.messages.noGroups}</div>`;
        showView('groupMenu');
        return;
    }

    // 1. ALAN (DOMAIN) KONTROLÜ
    // Eğer hiç alan tanımlanmamışsa eski usül (hepsini dök) çalışsın
    if (!data.domains || data.domains.length === 0) {
        renderGroupGrid(data.groups, container);
        showView('groupMenu');
        return;
    }

    // 2. SEKMELERİ OLUŞTUR
    // "Tümü" seçeneği opsiyoneldir, isterseniz kaldırabilirsiniz. Ben kullanıcı rahatlığı için ekliyorum.
    let tabsHtml = `<div class="domain-tabs-container">`;
    
    // a) Tüm Gruplar Sekmesi
    tabsHtml += `<button class="domain-tab-btn ${activeDomainTab === 'all' ? 'active' : ''}" onclick="switchDomainTab('all')">Tümü</button>`;
    
    // b) Tanımlı Alanlar
    data.domains.forEach(d => {
        const isActive = activeDomainTab === d.id ? 'active' : '';
        tabsHtml += `<button class="domain-tab-btn ${isActive}" onclick="switchDomainTab('${d.id}')">${d.name}</button>`;
    });

    // c) Tanımsızlar (Genel) - Eğer alanı olmayan grup varsa gösterelim
    const unassignedGroups = data.groups.filter(g => !g.domainId);
    if (unassignedGroups.length > 0) {
        const isActive = activeDomainTab === 'general' ? 'active' : '';
        tabsHtml += `<button class="domain-tab-btn ${isActive}" onclick="switchDomainTab('general')">Diğer</button>`;
    }
    
    tabsHtml += `</div>`;
    
    // Sekmeleri konteynerin tepesine ekle
    container.innerHTML = tabsHtml;

    // 3. İÇERİK ALANI OLUŞTUR
    const contentDiv = document.createElement('div');
    contentDiv.id = 'domainContentArea';
    container.appendChild(contentDiv);

    // 4. SEÇİLİ SEKMENİN GRUPLARINI FİLTRELE VE GÖSTER
    renderActiveTabContent();
    
    showView('groupMenu');
}

// Sekme Değiştirme Fonksiyonu
function switchDomainTab(domainId) {
    activeDomainTab = domainId;
    // Tüm butonların aktifliğini kaldır, tıklananı aktif yap
    document.querySelectorAll('.domain-tab-btn').forEach(btn => btn.classList.remove('active'));
    // Tıklanan butonu bulup active class eklemek için event target kullanmıyoruz çünkü fonksiyon render içinde tekrar çağrılıyor.
    // Yeniden çizdirmek en temizi:
    loadAndShowGroupMenu(); 
}

// Filtreleme ve Çizdirme Mantığı
function renderActiveTabContent() {
    const contentDiv = document.getElementById('domainContentArea');
    contentDiv.innerHTML = '';

    let filteredGroups = [];

    if (activeDomainTab === 'all') {
        filteredGroups = data.groups;
    } else if (activeDomainTab === 'general') {
        // Domain ID'si olmayanlar
        filteredGroups = data.groups.filter(g => !g.domainId);
    } else {
        // Seçili domain ID'sine sahip olanlar
        filteredGroups = data.groups.filter(g => g.domainId === activeDomainTab);
    }

    if (filteredGroups.length === 0) {
        contentDiv.innerHTML = `<div class="content-box" style="text-align:center; color:#718096;">Bu alanda henüz grup yok.</div>`;
    } else {
        renderGroupGrid(filteredGroups, contentDiv);
    }
}

// Yardımcı: Izgara (Grid) Oluşturucu (Eski kodunuzun ayrıştırılmış hali)
function renderGroupGrid(groupList, targetElement) {
    const t = getMergedTranslations(data.settings.language || 'tr');
    const currentLang = data.settings.language || 'tr'; 

    const grid = document.createElement('div');
    grid.className = 'group-story-grid';

    groupList.forEach(g => {
        // --- GRUP BİLGİSİNİ HAZIRLA ---
        const primaryGroupName = currentLang === 'de' ? g.nameDE || g.name : g.name;
        const secondaryGroupName = currentLang === 'de' ? g.name || '' : g.nameDE || '';
        const verbs = data.verbs[g.id] || [];
        const verbCount = verbs.length;

        const verbListText = verbs
            .slice(0, 3)
            .map(v => currentLang === 'de' ? v.verbDE || v.verbTR : v.verbTR)
            .filter(Boolean)
            .join(', ');
            
        const verbHtml = verbListText.length > 0 
            ? `<span class="small-muted verb-list-text">${escapeHtml(verbListText)}</span>` 
            : '';

        // --- GRUP BUTONU ---
        const groupBtn = document.createElement('button');
        groupBtn.className = 'btn btn-primary';
        groupBtn.innerHTML = `
          <strong>${escapeHtml(primaryGroupName)} <span class="group-summary">(${verbCount})</span></strong>
          <span class="small-muted">${escapeHtml(secondaryGroupName)}</span>
          ${verbHtml}
        `;
        groupBtn.onclick = () => selectGroup(g.id);
        grid.appendChild(groupBtn);
        
        // --- HİKAYE BUTONU ---
        const storyBtn = document.createElement('button');
        storyBtn.className = 'btn btn-warning';
        
        if (g.story && g.story.title) {
            const storyTitleTR = g.story.title;
            const storyTitleDE = g.story.titleDE || g.story.title; 
            const primaryStoryTitle = currentLang === 'de' ? storyTitleDE : storyTitleTR;
            const secondaryStoryTitle = currentLang === 'de' ? storyTitleTR : (g.story.titleDE || '');

            storyBtn.innerHTML = `
              <strong>${escapeHtml(primaryStoryTitle)}</strong>
              <span class="small-muted">${escapeHtml(secondaryStoryTitle)}</span>
            `;
            storyBtn.onclick = () => showGroupStory(g.id);
        } else {
            storyBtn.textContent = t.messages.noStoryAvailable || 'Hikaye Yok';
            storyBtn.classList.add('disabled');
            storyBtn.disabled = true;
        }
        grid.appendChild(storyBtn);
    });

    targetElement.appendChild(grid);
}
function selectGroup(id){
  state.group = id; state.groupData = data.groups.find(x=>x.id===id) || null;
  const verbs = (data.verbs[id]||[]).filter(v=>v.id);
  const container = document.getElementById('verbButtons'); container.innerHTML='';
  const t = getMergedTranslations(data.settings.language || 'tr');
  if(verbs.length===0){
    container.innerHTML = `<div class="content-box">${t.messages.noVerbs}</div>`;
    showView('verbMenu');
    return;
  }
  verbs.forEach(v=>{
    const b = document.createElement('button'); b.className='btn btn-primary'; b.textContent = `${v.verbTR || v.verbDE}` + (v.verbDE? ' ('+v.verbDE+')':''); b.onclick = ()=>selectVerb(v.id); container.appendChild(b);
  });
  showView('verbMenu');
}
function selectVerb(verbId) {
    state.verb = verbId;
    // Fiil verisini bul
    let verbData = null;
    if(data.verbs[state.group]) verbData = data.verbs[state.group].find(v => v.id === verbId);
    state.verbData = verbData;

    const container = document.getElementById('sectionButtons');
    container.innerHTML = '';

    // --- KARIŞIK MOD AYRIMI ---
    let targetTopics = {};
    const cls = data.settings.currentClass;

    if (cls === 'MIXED') {
        // Sadece yıldızlı konuları çek
        if (data.settings.starredTopics) {
            Object.keys(data.settings.starredTopics).forEach(tid => {
                // TopicPool'dan ismini al
                if (data.topicPool[tid]) {
                    targetTopics[tid] = data.topicPool[tid];
                }
            });
        }
        // Hiç yıldız yoksa uyarı butonu
        if (Object.keys(targetTopics).length === 0) {
            container.innerHTML = `<button class="btn btn-warning" onclick="renderMixedModeList(); showView('mixedSettingsView')">⭐ Önce Konu Seçmelisin</button>`;
            showView('sectionMenu');
            return;
        }
    } else {
        // Normal Mod (A1, A2...)
        targetTopics = data.topics[cls] || {};
    }

    // --- BUTONLARI ÇİZ ---
    Object.entries(targetTopics).forEach(([num, name]) => {
        const key = `${verbId}_s${num}`;
        const count = (data.content[key] || []).length;
        
        const btn = document.createElement('button');
        // İçerik varsa mavi, yoksa gri
        btn.className = count > 0 ? 'btn btn-primary' : 'btn btn-secondary';
        
        // Buton Metni
        btn.innerHTML = `<strong>${num}. ${name}</strong><br><small>(${count} Cümle)</small>`;
        
        if (count > 0) {
            btn.onclick = () => {
                // Bölüm seçme fonksiyonunu çağır (senin kodunda selectSection veya benzeri olabilir)
                if(typeof selectSection === 'function') selectSection(num);
                else { state.section = num; showView('learningView'); startMode('study'); } // Yedek mantık
            };
        } else {
            btn.disabled = true;
            btn.style.opacity = "0.6";
        }
        container.appendChild(btn);
    });

    showView('sectionMenu');
}
function startTekrar(status) {
    state.tekrarStatus = status;
    state.mode = null;
    state.sessionTotal = 0; // YENİ: Oturum toplamı
    state.sessionCompleted = 0; // YENİ: Tamamlanan
    const t = getMergedTranslations(data.settings.language || 'tr');
    const statusMap = {
        zor: t.srs.zorlandiklarim,
        normal: t.srs.normal,
        ogrendim: t.srs.ogrendiklerim
    };
    document.getElementById('tekrarModeTitle').textContent = statusMap[status] || 'Tekrar Modu';
    showView('tekrarModeMenu');
}
function startTekrarModePrompt() {
    // Çeviri modu zaten setConversionMode ile ayarlandı.
}
function startTekrarMode(modeId) {
    state.mode = modeId;
    // KRİTİK SIFIRLAMA EKLENDİ (YAMA 1 - Devam)
    state.showAnswer = false;
    
    const allCardsOfStatus = [];
    Object.keys(srsData).forEach(key => {
        if (srsData[key].status === state.tekrarStatus) {
            allCardsOfStatus.push(key);
        }
    });
    state.deck = shuffle(allCardsOfStatus);
    state.deckPos = 0;
    state.sessionTotal = state.deck.length; // Toplamı sabitle
    console.log(`Tekrar modu: ${state.tekrarStatus} (${state.mode}). ${state.deck.length} kart bulundu.`);
    showLearning();
}
function startMode(modeId){
  state.mode = modeId;
  state.tekrarStatus = null;
  // KRİTİK SIFIRLAMA EKLENDİ (YAMA 1 - Devam)
  state.showAnswer = false;
  
  const sentences = getSentences();
  const newCards = [];
  for (let i = 0; i < sentences.length; i++) {
      const key = getSrsKey(state.verb, state.section, i);
      const cardData = getCardSrsData(key);
      if (cardData.status === 'new') {
          newCards.push(key);
      }
  }
  state.deck = shuffle(newCards);
  state.deckPos = 0;
  state.sessionTotal = state.deck.length; // Toplamı sabitle
  console.log(`Çalışma modu: ${state.verb}_s${state.section}. ${state.deck.length} YENİ kart bulundu.`);
  showLearning();
}
function getSentences(){
    if (!state.verb || !state.section) return [];
    return data.content[`${state.verb}_s${state.section}`] || [];
}
function shuffle(a){ 
    for(let i=a.length-1; i > 0; i--){ 
        const j=Math.floor(Math.random()*(i+1)); 
        [a[i], a[j]]=[a[j], a[i]]; 
    } 
    return a; 
}
function showLearning(){
  const t = getMergedTranslations(data.settings.language || 'tr');
  resetSpeechButtons();
  
  // v4.0: Akordeon ve Tamamlandı Kontrollerini yönet
  toggleLearningPanel(null); // Akordeonu kapat
  document.getElementById('learningControlsAccordion').style.display = 'block';
  document.getElementById('completionControls').style.display = 'none';
  document.getElementById('actionBtn').style.display = 'flex'; // Tekrar göster

  // YENİ: Güvenlik kontrolü - sessionTotal kayıpsa düzelt
  if ((!state.sessionTotal || state.sessionTotal === 0) && state.deck.length > 0) {
      state.sessionTotal = state.deck.length;
  }

  // Tekrar modunda "Önceki" butonu görünür, çalışma modunda gizli
  const prevBtn = document.querySelector('#panelEdit button[onclick="previousQuestion()"]');
  if (prevBtn) {
      prevBtn.style.display = (state.mode === 'study') ? 'none' : 'flex';
  }

  if (state.deck.length === 0) {
      const message = (state.mode === 'study') ? t.messages.noNewCards : t.messages.noDueCards;
      document.getElementById('learningContent').innerHTML = `<div class="content-box"><h3 style="text-align:center">${message}</h3></div>`;
      
      // İlerlemeyi %100 yap
      const total = state.sessionTotal || 0;
      updateProgress(total, total);
      
      showCompletion(); // v4.0 Akışı göstermek için
      return;
  }
  if (state.deckPos >= state.deck.length) {
      showCompletion();
      return;
  }
  state.currentCardKey = state.deck[state.deckPos];
  const parts = state.currentCardKey.match(/^(.*?)_s(\d+)_(\d+)$/);
  if (!parts) {
      console.error("Geçersiz kart anahtarı:", state.currentCardKey);
      state.deckPos++;
      showLearning();
      return;
  }
  const verbId = parts[1];
  const sectionNum = parts[2];
  const sentenceIndex = parseInt(parts[3]);
  const sentenceArray = data.content[`${verbId}_s${sectionNum}`] || [];
  state.currentCardData = sentenceArray[sentenceIndex];
  
  // Tekrar modu için state.verb ve state.section'ı ayarla
  if (state.mode !== 'study') {
      state.verb = verbId;
      state.verbData = (data.verbs[state.group] || []).find(v => v.id === verbId);
      state.section = sectionNum;
  }
  
  if (!state.currentCardData) {
      console.error(`Cümle verisi bulunamadı: ${state.currentCardKey}`);
      state.deckPos++;
      showLearning();
      return;
  }
  renderSentence();
  showView('learningView');
}
function updateProgress(current, total){
  const currQuestionNum = Math.min(current + 1, total);
  const percent = total === 0 ? 100 : Math.round((current / total) * 100);
  const pFill = document.getElementById('progressFill');
  const pText = document.getElementById('progressText');
  if (pFill) {
      pFill.style.width = percent + '%';
      pFill.textContent = percent + '%';
  }
  if (pText) pText.textContent = `${currQuestionNum} / ${total}`;
}
function buildSentenceHintHtml(){
  if(!state.currentCardKey || !data.hints || !data.hints.sentences || !data.hints.sentences[state.currentCardKey]) {
      return ''; 
  }
  const hintText = data.hints.sentences[state.currentCardKey];
  return `<div class="hint-item"><strong>Cümle İpucu:</strong> ${escapeHtml(hintText)}</div>`;
}
function showHintDetail(type) {
    const t = getMergedTranslations(data.settings.language || 'tr');
    let title = '';
    let content = '';

    if (!state.currentCardKey) {
        content = 'Lütfen önce bir çalışma kartı yükleyin.';
        title = 'Hata';
    } else {
        const parts = state.currentCardKey.match(/^(.*?)_s(\d+)_(\d+)$/);
        const verbId = parts[1];
        const sectionNum = parts[2];
        const secCode = 'B' + sectionNum;
        const verbData = state.verbData || (data.verbs[state.group] || []).find(v => v.id === verbId);

        if (type === 'section') {
            title = 'Bölüm İpucu: ' + ((data.topicPool && data.topicPool[sectionNum]) || secCode);
            content = (data.hints && data.hints.sections && data.hints.sections[secCode]) ? data.hints.sections[secCode] : 'Bu bölüme ait genel bir ipucu eklenmemiştir.';
        } else if (type === 'verb') {
            title = 'Fiil İpucu: ' + (verbData ? (verbData.verbTR || verbData.verbDE) : verbId);
            content = data.hints && data.hints.verbs && data.hints.verbs[verbId] ? data.hints.verbs[verbId] : 'Bu fiile ait genel bir ipucu eklenmemiştir.';
        }
    }
    // Ortak detay görünümünü kullan
    showDetailView(title, content);
}
/* --- YENİ: ALAN (DOMAIN) YÖNETİMİ --- */

function showAdminDomainForm(area) {
    const t = getMergedTranslations(data.settings.language || 'tr');
    
    // Mevcut Alanları Listele
    let domainListHtml = '<div style="max-height: 200px; overflow-y: auto; background: #fff; border: 1px solid #eee; border-radius: 8px; padding: 10px;">';
    if(!data.domains || data.domains.length === 0) {
        domainListHtml += '<p class="small-muted">Henüz hiç alan tanımlanmamış.</p>';
    } else {
        domainListHtml += '<table style="width:100%; font-size:0.9rem;"><thead><tr><th>ID</th><th>TR İsim</th><th>DE İsim</th><th>İşlem</th></tr></thead><tbody>';
        data.domains.forEach(d => {
            domainListHtml += `<tr>
                <td><b>${d.id}</b></td>
                <td>${d.name}</td>
                <td>${d.nameDE || ''}</td>
                <td style="text-align:right;"><button class="btn btn-danger btn-small" onclick="adminDeleteDomain('${d.id}')">Sil</button></td>
            </tr>`;
        });
        domainListHtml += '</tbody></table>';
    }
    domainListHtml += '</div>';

    area.innerHTML = `<div class="content-box">
        <h4 style="border-bottom:1px solid #eee; padding-bottom:10px; margin-bottom:15px;">📂 Alan (Kategori) Yönetimi</h4>
        
        <label style="font-weight:bold;">Mevcut Alanlar</label>
        ${domainListHtml}
        
        <hr style="margin: 15px 0; border:0; border-top:1px dashed #ccc;">
        
        <h5 style="color:#2f855a;">➕ Yeni Alan Ekle</h5>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
            <div>
                <label>Alan ID (Benzersiz, örn: a1_genel)</label>
                <input id="new_dom_id" class="input-field" placeholder="bos_zaman">
            </div>
            <div>
                 <label>Alan Adı (TR)</label>
                <input id="new_dom_name" class="input-field" placeholder="Boş Zaman">
            </div>
            <div style="grid-column: span 2;">
                <label>Alan Adı (DE)</label>
                <input id="new_dom_name_de" class="input-field" placeholder="Freizeit">
            </div>
        </div>
        
        <div class="button-group-row" style="margin-top:15px;">
            <button class="btn btn-success" onclick="adminAddDomain()">✅ Yeni Alanı Kaydet</button>
        </div>
    </div>`;
}

function adminAddDomain() {
    const id = document.getElementById('new_dom_id').value.trim();
    const name = document.getElementById('new_dom_name').value.trim();
    const nameDE = document.getElementById('new_dom_name_de').value.trim();

    if (!id || !name) { alert("Lütfen ID ve TR İsim giriniz."); return; }
    
    if (!data.domains) data.domains = [];
    if (data.domains.find(d => d.id === id)) { alert("Bu ID zaten kullanılıyor!"); return; }

    data.domains.push({ id, name, nameDE });
    saveContentOverride(); // Kaydet
    alert("Alan eklendi!");
    showAdminForm('domainManager'); // Formu yenile
}

function adminDeleteDomain(id) {
    if (!confirm(`${id} alanını silmek istiyor musunuz? (Bu alana bağlı gruplar 'Tanımsız'a düşecektir)`)) return;
    
    data.domains = data.domains.filter(d => d.id !== id);
    saveContentOverride();
    showAdminForm('domainManager');
}

// showAdminForm fonksiyonuna yeni case eklemeyi unutmayın:
// Mevcut showAdminForm fonksiyonunuzun içine şu satırı ekleyin:
// else if (formType === 'domainManager') showAdminDomainForm(area);
// YENİ: Öğrenme Ekranı Akordeon Kontrolü (v4.0)
/* --- GÜNCELLENMİŞ GRUP YÖNETİMİ (ALAN SEÇİMLİ) --- */

function showAdminGroupForm(area) {
    const t = getMergedTranslations(data.settings.language || 'tr');
    
    // Grup Listesi
    let options = data.groups.map(g => `<option value="${g.id}">${g.name} (${g.id})</option>`).join('');
    
    // Alan (Domain) Listesi
    let domainOptions = '<option value="">-- Alan Yok (Genel) --</option>';
    if (data.domains) {
        data.domains.forEach(d => {
            domainOptions += `<option value="${d.id}">${d.name} (${d.nameDE})</option>`;
        });
    }

    area.innerHTML = `<div class="content-box"><h4>${t.admin.addGroup}</h4>
      <label>${t.labels.group} (Düzenlemek için seçin)</label>
      <select id="adm_g_select" class="select-field"><option value="">-- YENİ GRUP --</option>${options}</select>
      
      <div style="background:#f0fff4; padding:10px; border-radius:8px; margin:10px 0; border:1px solid #c6f6d5;">
          <label style="font-weight:bold; color:#276749;">📂 Bağlı Olduğu Alan (Kategori)</label>
          <select id="adm_g_domain" class="select-field" style="border-color:#48bb78;">
              ${domainOptions}
          </select>
          <p class="small-muted">Bu grubun ana ekranda hangi sekmede görüneceğini belirler.</p>
      </div>

      <label>${t.labels.groupID}</label><input id="adm_g_id" class="input-field">
      <label>${t.labels.groupNameTR}</label><input id="adm_g_name_tr" class="input-field">
      <label>${t.labels.groupNameDE}</label><input id="adm_g_name_de" class="input-field">
      
      <div class="button-group-row">
        <button class="btn btn-primary" onclick="adminSaveGroup()">✅ ${t.buttons.save}</button>
        <button class="btn btn-danger" onclick="adminDeleteGroup()">🗑 ${t.buttons.delete}</button>
      </div></div>`;

    document.getElementById('adm_g_select').onchange = (e) => {
        const gid = e.target.value;
        const g = data.groups.find(x => x.id === gid);
        if (g) {
            document.getElementById('adm_g_id').value = g.id;
            document.getElementById('adm_g_id').readOnly = true;
            document.getElementById('adm_g_name_tr').value = g.name;
            document.getElementById('adm_g_name_de').value = g.nameDE || '';
            // Alan seçimini getir
            document.getElementById('adm_g_domain').value = g.domainId || ''; 
        } else {
            // Yeni kayıt modu
            document.getElementById('adm_g_id').value = '';
            document.getElementById('adm_g_id').readOnly = false;
            document.getElementById('adm_g_name_tr').value = '';
            document.getElementById('adm_g_name_de').value = '';
            document.getElementById('adm_g_domain').value = '';
        }
    };
}

// Kaydetme Fonksiyonunu da güncellememiz lazım (DomainId'yi kaydetsin diye)
function adminSaveGroup() {
    const selId = document.getElementById('adm_g_select').value;
    const id = document.getElementById('adm_g_id').value.trim();
    const name = document.getElementById('adm_g_name_tr').value.trim();
    const named = document.getElementById('adm_g_name_de').value.trim();
    const domainId = document.getElementById('adm_g_domain').value; // YENİ: Alan ID

    if (!id || !name) { alert('ID ve TR İsim gerekli'); return; }
    
    let g = data.groups.find(x => x.id === (selId || id));
    if (g) {
        g.name = name;
        g.nameDE = named;
        g.domainId = domainId; // GÜNCELLEME
        alert('Grup güncellendi');
    } else {
        if (data.groups.find(x => x.id === id)) { alert('Bu ID zaten var'); return; }
        // YENİ EKLEME
        data.groups.push({ id: id, name: name, nameDE: named, domainId: domainId, story: null });
        if (!data.verbs[id]) data.verbs[id] = [];
        alert('Grup eklendi');
    }
    saveContentOverride();
    showAdminForm('addGroup');
}
function toggleLearningPanel(panelId) {
    const panels = ['panelHint', 'panelListen', 'panelEdit'];
    
    if (panelId === state.activeLearningPanel || panelId === null) {
        if (state.activeLearningPanel) {
            document.getElementById(state.activeLearningPanel).style.display = 'none';
        }
        state.activeLearningPanel = null;
        return;
    }

    panels.forEach(id => {
        if (id !== panelId) {
            const el = document.getElementById(id);
            if(el) el.style.display = 'none';
        }
    });

    const targetPanel = document.getElementById(panelId);
    if (targetPanel) {
        targetPanel.style.display = 'block';
        state.activeLearningPanel = panelId;
    }
}


function renderSentence(){
  const container = document.getElementById('learningContent');
  document.getElementById('resultArea').innerHTML='';
  document.getElementById('answerArea').innerHTML='';
  const hintPanelEl = document.getElementById('hintPanel');
  const quickEditPanel = document.getElementById('quickEditPanel');
  quickEditPanel.style.display = 'none';
  
  // YAMA 1 KRİTİK DÜZELTME: Buton durumlarını resetle
  const actionBtn = document.getElementById('actionBtn');
  const srsControls = document.getElementById('srsControls');
  
  if (state.mode === 'study') {
      actionBtn.style.display = state.showAnswer ? 'none' : 'flex'; 
      srsControls.style.display = state.showAnswer ? 'flex' : 'none';
      actionBtn.textContent = getMergedTranslations(data.settings.language || 'tr').buttons.show;
      document.querySelector('#panelEdit button[onclick="previousQuestion()"]').style.display = 'none';
  } else {
      actionBtn.style.display = state.showResult ? 'none' : 'flex'; // Sonucu gösterdikten sonra aksiyon butonunu gizle
      srsControls.style.display = 'none';
      actionBtn.textContent = getMergedTranslations(data.settings.language || 'tr').buttons.check;
      document.querySelector('#panelEdit button[onclick="previousQuestion()"]').style.display = 'flex';
  }
  // YAMA 1 KRİTİK DÜZELTME SONU

  hintPanelEl.style.display = state.hintPanelVisible ? 'block' : 'none';
  hintPanelEl.innerHTML = '';
  
  state.showResult = false;
  state.wordPool = [];
  state.wordSelected = [];
  
  if (state.deckPos >= state.deck.length) {
      showCompletion();
      return;
  }
  const sent = state.currentCardData;
  if (!sent) {
      console.error("Render edilecek cümle bulunamadı", state.currentCardKey);
      return;
  }
  container.innerHTML = '';
  
  // Cümle ipucunu oluştur
  if(state.hintPanelVisible){
    const hintHtml = buildSentenceHintHtml();
    hintPanelEl.innerHTML = hintHtml || '<div class="hint-item">Bu kart için ipucu yok.</div>';
    hintPanelEl.style.display = 'block';
  } else {
    hintPanelEl.innerHTML = '';
    hintPanelEl.style.display = 'none';
  }
  
  const t = getMergedTranslations(data.settings.language || 'tr');
  const isTrDe = data.settings.conversionMode === 'tr-de';
  const questionText = isTrDe ? sent.tr : sent.de;
  const answerText = isTrDe ? sent.de : sent.tr;
  const questionLang = isTrDe ? 'TR' : 'DE';
  const answerLang = isTrDe ? 'DE' : 'TR';

  let title = '';
  if (state.mode === 'study') title = t.modes.study;
  else if (state.mode === 'quiz') title = t.modes.quiz;
  else if (state.mode === 'cloze') title = t.modes.cloze;
  else if (state.mode === 'wordorder') title = t.modes.wordorder;
  
  const verbName = (state.verbData && (state.verbData.verbTR || state.verbData.verbDE)) || state.verb;
  const sectionName = (data.topicPool && data.topicPool[state.section]) || `Bölüm ${state.section}`;
  document.getElementById('learningTitle').textContent = `${verbName}`;
  document.getElementById('learningSubtitle').textContent = `${sectionName} - ${title}`;


  if(state.mode === 'study'){
    container.innerHTML = `<div class="sentence"><strong>${questionLang}:</strong> ${escapeHtml(questionText)}</div>
                             <div id="answerDisplay" class="sentence hidden"><strong>${answerLang}:</strong> ${escapeHtml(answerText)}</div>`;
  } else if(state.mode === 'cloze'){
    const words = answerText.split(/\s+/).filter(Boolean);
    const idx = Math.floor(Math.random()*words.length);
    const correct = words[idx].replace(/[.,!?;:]$/,'');
    words[idx] = '_____';
    state.correctAnswer = correct;
    container.innerHTML = `<div class="sentence"><b>${questionLang}:</b> ${escapeHtml(questionText)}</div>
                             <div class="sentence"><b>${answerLang}:</b> ${escapeHtml(words.join(' '))}</div>
                             <input id="clozeInput" class="input-field" placeholder="${t.placeholders?.cloze || 'Boşluğu doldurun...'}">`;
  } else if(state.mode === 'wordorder'){
    const words = answerText.split(/\s+/).filter(Boolean);
    state.wordPool = shuffle([...words]);
    state.wordSelected = [];
    state.correctAnswer = words.join(' ');
    container.innerHTML = `<div class="sentence"><b>${questionLang}:</b> ${escapeHtml(questionText)}</div>
                             <div class="word-order-area">
                               <div class="word-pool"><strong>Karışık Kelimeler:</strong><div id="wordPoolArea"></div></div>
                               <div class="word-selected"><strong>Düzenleme Satırı:</strong><div id="wordSelectedArea"></div></div>
                             </div>`;
    renderWordOrder();
  } else if(state.mode === 'quiz'){
    state.correctAnswer = answerText;
    container.innerHTML = `<div class="sentence"><b>${questionLang}:</b> ${escapeHtml(questionText)}</div>
                             <input id="quizInput" class="input-field" placeholder="${t.placeholders?.quiz || 'Çeviriyi yazın...'}">`;
  }

  const btnDE = document.getElementById('btnPlayDE');
  const btnTR = document.getElementById('btnPlayTR');
  const canPlayDE = (state.mode === 'study' && state.showAnswer) || state.showResult || !isTrDe;
  const canPlayTR = (state.mode === 'study' && state.showAnswer) || state.showResult || isTrDe;
  if (btnDE) { btnDE.disabled = !canPlayDE; btnDE.classList.toggle('disabled', !canPlayDE); }
  if (btnTR) { btnTR.disabled = !canPlayTR; btnTR.classList.toggle('disabled', !canPlayTR); }
  
  // Srs Butonlarının görünürlüğü zaten yukarıda ayarlandı.
  
  // YENİ: İlerleme Hesaplama (Sabit Toplam Üzerinden)
  // Güvenlik kontrolü
  if ((!state.sessionTotal || state.sessionTotal === 0) && state.deck.length > 0) {
      state.sessionTotal = state.deck.length;
  }
  const total = state.sessionTotal || state.deck.length;
  const current = Math.max(0, total - state.deck.length + state.deckPos);
  updateProgress(current, total);
}
function showQuickEditPanel(){
    if (!state.currentCardData) return;
    toggleLearningPanel(null); // Diğer panelleri kapat
    const sent = state.currentCardData;
    const currentHint = (data.hints && data.hints.sentences && data.hints.sentences[state.currentCardKey]) || '';
    document.getElementById('qe_tr').value = sent.tr || '';
    document.getElementById('qe_de').value = sent.de || '';
    document.getElementById('qe_hint').value = currentHint;
    document.getElementById('quickEditTitle').textContent = `Hızlı Düzenle (${state.currentCardKey})`;
    document.getElementById('quickEditPanel').style.display = 'block';
}
function saveQuickEdit(){
    if (!state.currentCardKey) return;
    const parts = state.currentCardKey.match(/^(.*?)_s(\d+)_(\d+)$/);
    const verbId = parts[1];
    const sectionNum = parts[2];
    const sentenceIndex = parseInt(parts[3]);
    const newTr = document.getElementById('qe_tr').value.trim();
    const newDe = document.getElementById('qe_de').value.trim();
    const newHint = document.getElementById('qe_hint').value.trim();
    const contentKey = `${verbId}_s${sectionNum}`;
    if (!data.content[contentKey]) data.content[contentKey] = [];
    data.content[contentKey][sentenceIndex] = { tr: newTr, de: newDe };
    if(!data.hints) data.hints = {sentences:{}, verbs:{}, sections:{}};
    if(!data.hints.sentences) data.hints.sentences = {};
    if (newHint) { data.hints.sentences[state.currentCardKey] = newHint; }
    else { delete data.hints.sentences[state.currentCardKey]; }
    state.currentCardData = { tr: newTr, de: newDe };
    saveContentOverride();
    document.getElementById('quickEditPanel').style.display = 'none';
    renderSentence();
    const t = getMergedTranslations(data.settings.language || 'tr');
    alert(t.messages.quickEditSaved);
}
function renderWordOrder(){
  const pool = document.getElementById('wordPoolArea');
  const sel = document.getElementById('wordSelectedArea');
  pool.innerHTML='';
  sel.innerHTML='';
  state.wordSelected.forEach((w,i)=>{
    const d = document.createElement('div'); d.className='word-item top'; d.textContent = w; d.onclick = ()=> unselectWord(i, w); sel.appendChild(d);
  });
  state.wordPool.forEach((w,i)=>{
    const d = document.createElement('div'); d.className='word-item'; d.textContent = w; d.onclick = ()=> selectWordFromPool(i); pool.appendChild(d);
  });
}
function selectWordFromPool(index){ const word = state.wordPool[index]; state.wordSelected.push(word); state.wordPool.splice(index, 1); renderWordOrder(); }
function unselectWord(index, word){ const removedWord = state.wordSelected.splice(index, 1)[0]; state.wordPool.push(removedWord); renderWordOrder(); }

function showResult(isCorrect, userAnswer, specialMessage = null) {
    const resultArea = document.getElementById('resultArea'), answerArea = document.getElementById('answerArea');
    const t = getMergedTranslations(data.settings.language || 'tr');
    
    let resultHtml = isCorrect ? '<div class="result correct">✓ Doğru!</div>' : '<div class="result incorrect">✗ Yanlış!</div>';
    if (specialMessage) {
        resultHtml += `<div class="result" style="background-color: #e6f3ff; color: #0f172a; border-left-color: #4299e1;">${escapeHtml(specialMessage)}</div>`;
    }
    resultArea.innerHTML = resultHtml;
    
    answerArea.innerHTML = `<div class="result"><strong>Sizin:</strong> ${escapeHtml(userAnswer||'(boş)')}</div><div class="result"><strong>Doğru:</strong> ${escapeHtml(state.correctAnswer)}</div>`;

    state.showResult = true;
    document.getElementById('actionBtn').textContent = t.buttons.next;
    const btnDE = document.getElementById('btnPlayDE');
    const btnTR = document.getElementById('btnPlayTR');
    if (btnDE) { btnDE.disabled = false; btnDE.classList.remove('disabled'); }
    if (btnTR) { btnTR.disabled = false; btnTR.classList.remove('disabled'); }

    if (state.autoPlayAudio) {
        playCurrentSentence('de', 0, true);
    }
}

function handleAction(){
  const btn = document.getElementById('actionBtn');
  const resultArea = document.getElementById('resultArea'), answerArea = document.getElementById('answerArea');
  const t = getMergedTranslations(data.settings.language || 'tr');
  
  const triggerAutoPlay = () => {
      if (state.autoPlayAudio) {
          playCurrentSentence('de', 0, true);
      }
  };

  if(state.mode === 'study'){
    if(!state.showAnswer){
      const ad = document.getElementById('answerDisplay');
      if(ad) ad.classList.remove('hidden');
      state.showAnswer = true;
      btn.style.display = 'none';
      document.getElementById('srsControls').style.display = 'flex';
      const btnDE = document.getElementById('btnPlayDE');
      const btnTR = document.getElementById('btnPlayTR');
      if (btnDE) { btnDE.disabled = false; btnDE.classList.remove('disabled'); }
      if (btnTR) { btnTR.disabled = false; btnTR.classList.remove('disabled'); }
      triggerAutoPlay();
    }
  } else {
    if(state.showResult){
        // Eğer statü değiştiyse (updateSrsStatusAfterQuiz), kart zaten desteden çıkarıldı.
        // Statü değişmediyse, kartın pozisyonunu ilerlet.
        if (!resultArea.innerHTML.includes('listesine taşındı')) {
            state.deckPos++;
        }
        state.showAnswer=false;
        state.showResult=false;
        showLearning(); // Bir sonraki karta geç
        return;
    }
    
    let userAnswer = '';
    let isCorrect = false;
    
    // YAMA 1C KRİTİK DÜZELTME: normalizeString ile duyarsız kontrol
    let normalizedCorrectAnswer = normalizeString(state.correctAnswer);
    
    if (state.mode === 'cloze') {
        const input = document.getElementById('clozeInput');
        userAnswer = (input && input.value.trim())||'';
        isCorrect = normalizeString(userAnswer) === normalizedCorrectAnswer;
    } else if (state.mode === 'wordorder') {
        userAnswer = state.wordSelected.join(' ').trim();
        // Kelime sıralamada tam eşleşme (boşluklar dahil) gerektiği için bu modda tam kontrol kalır:
        isCorrect = userAnswer === state.correctAnswer; 
    } else if (state.mode === 'quiz') {
        const input = document.getElementById('quizInput');
        userAnswer = (input && input.value.trim())||'';
        isCorrect = normalizeString(userAnswer) === normalizedCorrectAnswer;
    }
    // YAMA 1C KRİTİK DÜZELTME SONU
    
    const statusChanged = updateSrsStatusAfterQuiz(state.currentCardKey, isCorrect, userAnswer);
    
    if (!statusChanged) {
        // Statü değişmediyse, normal sonucu göster
        showResult(isCorrect, userAnswer);
    }
  }
}
function previousQuestion(){
  if (state.mode === 'study') return;
  if(state.deckPos > 0){
      state.deckPos--;
      
      // KRİTİK SIFIRLAMA EKLENDİ (YAMA 1 - Devam)
      state.showAnswer=false;
      state.showResult=false;
      
      state.currentCardKey = state.deck[state.deckPos];
      const parts = state.currentCardKey.match(/^(.*?)_s(\d+)_(\d+)$/);
      const verbId = parts[1], sectionNum = parts[2], sentenceIndex = parseInt(parts[3]);
      state.currentCardData = (data.content[`${verbId}_s${sectionNum}`] || [])[sentenceIndex];
      // Tekrar modu için state.verb ve state.section'ı ayarla
      state.verb = verbId;
      state.verbData = (data.verbs[state.group] || []).find(v => v.id === verbId);
      state.section = sectionNum;

      renderSentence();
  }
}

// YENİ: Bir sonraki adımı (bölüm/fiil/hikaye) bulan fonksiyon (v4.0)
function findNextStudyStep() {
    const t = getMergedTranslations(data.settings.language || 'tr');
    
    // Mevcut gruptaki tüm fiilleri sırayla al
    const currentGroupVerbs = data.verbs[state.group] || [];
    
    // 1. Mevcut fiilde yeni kartı olan sonraki bölümü ara
    const currentSectionNum = parseInt(state.section);
    const sectionKeys = Object.keys(data.topicPool || {}).map(Number).sort((a, b) => a - b);
    
    for (const secNum of sectionKeys) {
        if (secNum > currentSectionNum) {
            const contentKey = `${state.verb}_s${secNum}`;
            const sentences = data.content[contentKey] || [];
            
            if (sentences.length > 0) {
                // Sadece yeni kart var mı diye kontrol et (basitçe ilk kart)
                const key = getSrsKey(state.verb, secNum, 0); 
                if (getCardSrsData(key).status === 'new' || sentences.some((_, i) => getCardSrsData(getSrsKey(state.verb, secNum, i)).status === 'new')) {
                    return {
                        type: 'section',
                        section: secNum,
                        text: `${t.buttons.nextSection}: ${data.topicPool[secNum]}`,
                        action: () => {
                            selectSection(secNum);
                            startMode('study');
                        }
                    };
                }
            }
        }
    }

    // 2. Mevcut grupta yeni kartı olan sonraki fiili ara
    const currentVerbIndex = currentGroupVerbs.findIndex(v => v.id === state.verb);
    
    for (let i = currentVerbIndex + 1; i < currentGroupVerbs.length; i++) {
        const nextVerb = currentGroupVerbs[i];
        
        // Bu yeni fiilin tüm bölümlerini kontrol et
        for (const secNum of sectionKeys) {
             const contentKey = `${nextVerb.id}_s${secNum}`;
             const sentences = data.content[contentKey] || [];
             if (sentences.length > 0) {
                 // Sadece yeni kart var mı diye kontrol et
                 if (sentences.some((_, j) => getCardSrsData(getSrsKey(nextVerb.id, secNum, j)).status === 'new')) {
                     return {
                        type: 'verb',
                        verb: nextVerb.id,
                        text: `${t.buttons.nextVerb}: ${nextVerb.verbTR || nextVerb.verbDE}`,
                        action: () => {
                            selectVerb(nextVerb.id); // Bu, sectionMenu'yu açar
                            // Otomatik olarak ilk yeni bölüme yönlendirelim
                            selectSection(secNum);
                            startMode('study');
                        }
                    };
                 }
             }
        }
    }

    // 3. Grubun hikayesini ara (Sadece çalışma bittiyse göster)
    if (state.groupData && state.groupData.story && state.groupData.story.title) {
        return {
            type: 'story',
            text: t.buttons.goToStory,
            action: () => showGroupStory(state.group)
        };
    }

    // 4. Hiçbir şey bulunamadı
    return null;
}

function showCompletion(){
  const t = getMergedTranslations(data.settings.language || 'tr');
  let scoreHtml = '';
  
  // v4.0: Akordeon ve SRS'yi gizle
  document.getElementById('actionBtn').style.display = 'none';
  document.getElementById('srsControls').style.display = 'none';
  document.getElementById('learningControlsAccordion').style.display = 'none'; // Akordeon yapısını gizle

  const completionControls = document.getElementById('completionControls');
  const nextStepBtn = document.getElementById('nextStepBtn');

  if (state.mode === 'study') {
      scoreHtml = `<p style="text-align:center">Bu bölümdeki ${state.deck.length} yeni kartı çalıştınız!</p>`;
      
      const nextStep = findNextStudyStep();

      if (nextStep) {
          nextStepBtn.textContent = nextStep.text;
          nextStepBtn.onclick = nextStep.action;
          completionControls.style.display = 'flex';
      } else {
          // Sonraki adım yoksa, butonu gizle. Sabit Home/Back butonları kullanılacak.
          completionControls.style.display = 'none';
      }

  } else {
      scoreHtml = `<p style="text-align:center">"${state.tekrarStatus}" kategorisindeki ${state.deck.length} kartı tekrar ettiniz!</p>`;
      // Tekrar modu bittiğinde sadece mesaj göster, ekstra buton yok.
      completionControls.style.display = 'none';
  }

  document.getElementById('learningContent').innerHTML = `<div class="content-box"><h3 style="text-align:center">🎉 Tamamladınız!</h3>
    ${scoreHtml}
  </div>`;
  
  // Bitişte %100 göster
  const total = state.sessionTotal || state.deck.length;
  updateProgress(total, total); 
  const btnDE = document.getElementById('btnPlayDE');
  const btnTR = document.getElementById('btnPlayTR');
  if (btnDE) { btnDE.disabled = true; btnDE.classList.add('disabled'); }
  if (btnTR) { btnTR.disabled = true; btnTR.classList.add('disabled'); }
}
function playCurrentSentence(lang, retryCount = 0, forcePlay = false) {
    if ('speechSynthesis' in window) {
        const isCurrentlySpeaking = window.speechSynthesis.speaking;
        const isPaused = window.speechSynthesis.paused;
        
        // KRİTİK TOGGLE MANTIĞI: Eğer konuşma varsa, durdur.
        if ((isCurrentlySpeaking || isPaused) && !forcePlay) {
            window.speechSynthesis.cancel();
            if (musicPlayer && musicPlayer.isPlaying) musicPlayer.dim_music(false);
            return; 
        }
        // forcePlay ise, mevcut konuşmayı iptal et ki yenisi başlasın
        if (forcePlay) {
             window.speechSynthesis.cancel();
        }
    } else {
        const t = getMergedTranslations(data.settings.language || 'tr');
        alert(t.messages.ttsNotSupported);
        return;
    }
    
    if (!state.currentCardData) return;
    const sent = state.currentCardData;
    const text = (lang === 'de') ? sent.de : sent.tr;
    const langCode = (lang === 'de') ? 'de-DE' : 'tr-TR';
    if (!text) return;

    if (lang === 'de' && musicPlayer && musicPlayer.isPlaying && retryCount === 0) {
        musicPlayer.dim_music(true);
    }

    const speakNow = () => {
        const voices = window.speechSynthesis.getVoices();
        if (voices.length === 0 && retryCount < 3) {
            setTimeout(() => playCurrentSentence(lang, retryCount + 1), 500);
            return;
        }
        
        const utter = new SpeechSynthesisUtterance(text);
        utter.lang = langCode;
        utter.rate = state.speechRate || 1;
        
        let voice = voices.find(v => v.lang.toLowerCase() === langCode.toLowerCase() && /anna|markus/i.test(v.name));
        if (!voice) voice = voices.find(v => v.lang.toLowerCase() === langCode.toLowerCase());
        if (!voice && lang === 'de') voice = voices.find(v => v.lang.toLowerCase().startsWith('de'));
        if (voice) utter.voice = voice;
        
        utter.onend = utter.onerror = () => {
            if (musicPlayer && musicPlayer.isPlaying) musicPlayer.dim_music(false);
        };
        
        window.speechSynthesis.cancel();
        window.speechSynthesis.speak(utter);
    };

    if (window.speechSynthesis.getVoices().length === 0 && retryCount === 0 && (navigator.userAgent.match(/iPad|iPhone|iPod/i) || navigator.userAgent.match(/Safari/i) && !navigator.userAgent.match(/Chrome/i))) {
        window.speechSynthesis.onvoiceschanged = function handler() {
            window.speechSynthesis.onvoiceschanged = null; 
            speakNow();
        };
        setTimeout(speakNow, 250);
    } else {
        speakNow();
    }
}

/* ---------- Hikaye Fonksiyonları ---------- */
function showGroupStory(groupId){
  state.group = groupId; state.groupData = data.groups.find(g=>g.id===groupId) || null;
  const t = getMergedTranslations(data.settings.language || 'tr');
  if(!state.groupData || !state.groupData.story){ alert(t.messages.noStory); return; }
  document.getElementById('storyTitle').textContent = state.groupData.story.title || t.titles.story;
  renderStoryContent();
  showView('storyView');
}
function renderStoryContent(){
  const sc = document.getElementById('storyContent'); const s = state.groupData.story;
  sc.innerHTML = `<div class="story-section"><h3>Almanca</h3><div class="story-content" style="white-space: pre-wrap;">${escapeHtml(s.de||'')}</div></div>
                   <div class="story-section"><h3>Türkçe</h3><div class="story-content" style="white-space: pre-wrap;">${escapeHtml(s.tr||'')}</div></div>`;
}
function playStoryAudio(lang, retryCount = 0) {
    if ('speechSynthesis' in window) {
        const isCurrentlySpeaking = window.speechSynthesis.speaking;
        const isPaused = window.speechSynthesis.paused;
        
        // KRİTİK TOGGLE MANTIĞI: Eğer konuşma varsa, durdur.
        if (isCurrentlySpeaking || isPaused) {
            window.speechSynthesis.cancel();
            if (musicPlayer && musicPlayer.isPlaying) musicPlayer.dim_music(false);
            return; 
        }
    } else {
        const t = getMergedTranslations(data.settings.language || 'tr');
        alert(t.messages.ttsNotSupported);
        return;
    }

    const s = state.groupData && state.groupData.story;
    const t = getMergedTranslations(data.settings.language || 'tr');
    if (!s) { alert(t.messages.noStoryFound); return; }
    
    const text = (lang === 'de') ? s.de : s.tr;
    const langCode = (lang === 'de') ? 'de-DE' : 'tr-TR';
    if (!text) return;
    
    if (lang === 'de' && musicPlayer && musicPlayer.isPlaying && retryCount === 0) musicPlayer.dim_music(true);
    
    const speakNow = () => {
        const voices = window.speechSynthesis.getVoices();
        if (voices.length === 0 && retryCount < 3) {
            setTimeout(() => playStoryAudio(lang, retryCount + 1), 500);
            return;
        }
        const utter = new SpeechSynthesisUtterance(text);
        utter.lang = langCode;
        utter.rate = state.speechRate || 1;
        let voice = null;
        if (lang === 'de') voice = voices.find(v => v.lang.toLowerCase() === langCode.toLowerCase() && /anna|markus/i.test(v.name));
        if (!voice) voice = voices.find(v => v.lang.toLowerCase() === langCode.toLowerCase());
        if (!voice && lang === 'de') voice = voices.find(v => v.lang.toLowerCase().startsWith('de'));
        if (voice) utter.voice = voice;
        utter.onend = utter.onerror = () => {
            if (musicPlayer && musicPlayer.isPlaying) musicPlayer.dim_music(false);
        };
        window.speechSynthesis.cancel();
        window.speechSynthesis.speak(utter);
    };

    if (window.speechSynthesis.getVoices().length === 0 && retryCount === 0 && (navigator.userAgent.match(/iPad|iPhone|iPod/i) || navigator.userAgent.match(/Safari/i) && !navigator.userAgent.match(/Chrome/i))) {
         window.speechSynthesis.onvoiceschanged = function handler() {
             window.speechSynthesis.onvoiceschanged = null;
             speakNow();
         };
         setTimeout(speakNow, 250);
    } else {
        speakNow();
    }
}
function showStoryQuestions(){
  const story = state.groupData && state.groupData.story;
  const container = document.getElementById('storyQuestionsContent');
  const t = getMergedTranslations(data.settings.language || 'tr');
  container.innerHTML = '';
  if(!story || !story.quiz || !Array.isArray(story.quiz) || story.quiz.length===0){
    container.innerHTML = `<p>${t.messages.noStoryQuestions}</p>`;
    showView('storyQuestionsView');
    return;
  }
  const quiz = story.quiz;
  let html = '<form id="storyQuizForm">';
  quiz.forEach((q,i)=>{
    html += `<div style="margin:10px 0;padding:10px;border-radius:8px;background:#fff;color:#0f1724"><b>${i+1}. ${escapeHtml(q.q)}</b><div style="margin-top:8px">`;
    (q.options || []).forEach((opt,j)=>{
      html += `<label style="display:block;margin:6px 0"><input type="radio" name="sq${i}" value="${escapeHtml(opt)}"> ${escapeHtml(opt)}</label>`;
    });
    html += `</div></div>`;
  });
  html += `<div class="button-group-row"><button type="button" class="btn btn-primary" onclick="checkStoryAnswers()">${t.buttons.show}</button></div></form>`;
  container.innerHTML = html;
  showView('storyQuestionsView');
}
function checkStoryAnswers(){
  const story = state.groupData.story; const quiz = story.quiz;
  let correct=0;
  quiz.forEach((q,i)=>{
    const sel = document.querySelector(`input[name="sq${i}"]:checked`);
    if(sel && sel.value === q.a) correct++;
  });
  alert(`🎯 ${correct} / ${quiz.length} doğru`);
}

/* ---------- Debug & İlerleme Ekranı ---------- */
function debugData(){
  const t = getMergedTranslations(data.settings.language || 'tr');
  let msg = `${t.messages.jsonStatus}\n\n`;
  msg += `Gruplar: ${(data.groups||[]).length}\n`;
  msg += `Fiil Grupları: ${Object.keys(data.verbs||{}).length}\n`;
  msg += `İçerik Anahtarları: ${Object.keys(data.content||{}).length}\n`;
  msg += `Bölüm İpuçları: ${Object.keys((data.hints && data.hints.sections)||{}).length}\n`;
  msg += `İpucu (Cümle): ${Object.keys((data.hints&&data.hints.sentences)||{}).length}\n`;
  const srsCount = Object.keys(srsData).length;
  msg += `\nSRS Veri Kayıtları: ${srsCount}\n`;
  alert(msg);
}
function updateProgressView(){
  const t = getMergedTranslations(data.settings.language || 'tr');
  let totalCards = 0;
  let learnedCards = 0;
  let stats = { zor: 0, normal: 0, ogrendim: 0, new: 0 };
  
  // YENİ: Sadece geçerli içerikleri say (Silinmişleri yoksay)
  const validKeys = new Set();
  Object.keys(data.content).forEach(key => {
      const len = (data.content[key] || []).length;
      totalCards += len;
      // Anahtar oluştur: verbId_sSection_Index
      for(let i=0; i<len; i++) {
          validKeys.add(`${key}_${i}`);
      }
  });

  Object.keys(srsData).forEach(key => {
          if (validKeys.has(key)) { // Sadece geçerli kartları say
          const status = srsData[key].status;
          if (stats.hasOwnProperty(status)) {
              stats[status]++;
          }
      }
  });
  learnedCards = stats.zor + stats.normal + stats.ogrendim;
  stats.new = totalCards - learnedCards;
  if (stats.new < 0) stats.new = 0;
  const progressView = document.getElementById('progress');
  if (progressView && progressView.classList.contains('active')) {
      document.getElementById('progressStatZor').textContent = stats.zor;
      document.getElementById('progressStatNormal').textContent = stats.normal;
      document.getElementById('progressStatOgrenildi').textContent = stats.ogrendim;
      const percent = totalCards === 0 ? 0 : Math.round((learnedCards / totalCards) * 100);
      document.getElementById('totalProgressFill').style.width = percent + '%';
      document.getElementById('totalProgressFill').textContent = percent + '%';
      document.getElementById('totalProgressText').textContent = `${learnedCards} / ${totalCards}`;
  }
  const tekrarView = document.getElementById('tekrarMenu');
  if (tekrarView && tekrarView.classList.contains('active')) {
      document.getElementById('tekrarCountZor').textContent = stats.zor;
      document.getElementById('tekrarCountNormal').textContent = stats.normal;
      document.getElementById('tekrarCountOgrenildi').textContent = stats.ogrendim;
  }
}
function toggleHintPanel(){
    state.hintPanelVisible = !state.hintPanelVisible;
    const hintPanelEl = document.getElementById('hintPanel');
    if(state.hintPanelVisible) {
        const hintHtml = buildSentenceHintHtml();
        hintPanelEl.innerHTML = hintHtml || '<div class="hint-item">Bu kart için ipucu yok.</div>';
        hintPanelEl.style.display = 'block';
    } else {
        hintPanelEl.style.display = 'none';
    }
}


/* -------------------------------------------------------- */
/* -------------------- ADMIN PANeli (v4.0) -------------------- */
/* -------------------------------------------------------- */

// YENİ: Kılavuz Metni Düzenleme Formu (v4.0)
function showAdminGuideForm(area) {
    const t = getMergedTranslations(data.settings.language || 'tr');
    const guide = data.guideText || {};
    area.innerHTML = `
        <div class="content-box">
            <h4>⭐ Kılavuz Metnini Düzenle</h4>
            <p class="small-muted">Bu metin, üst sağdaki ⭐ butonuna basıldığında görünür.</p>
            <label>${t.labels.guideTitle}</label><input id="adm_g_title" class="input-field" value="${escapeHtml(guide.title || t.titles.guide)}">
            <label>${t.labels.guideContent}</label><textarea id="adm_g_content" class="textarea-field" rows="15">${escapeHtml(guide.content || '')}</textarea>
            <div class="button-group-row" style="margin-top:15px;">
                <button class="btn btn-primary" onclick="adminSaveGuide()">✅ ${t.buttons.save}</button>
            </div>
        </div>`;
}
function adminSaveGuide() {
    const t = getMergedTranslations(data.settings.language || 'tr');
    const title = document.getElementById('adm_g_title').value.trim();
    const content = document.getElementById('adm_g_content').value; // .trim() kaldırıldı
    if (!title || !content.trim()) { alert('Başlık ve içerik boş olamaz.'); return; }

    data.guideText = { title: title, content: content };
    saveContentOverride();
    alert(t.messages.guideSaved);
    showAdminForm('editGuide');
}
// Tablodan tek bir cümleyi siler (Kaydetmek için adminSaveBulkEdit çağrılmalıdır)
function adminDeleteSentenceFromBulk(contentKey, index, buttonElement) {
    if (confirm(`Cümle ${contentKey}_${index} silinmek üzere işaretlenecek. Tüm değişiklikleri kaydettiğinizde silinecektir. Devam?`)) {
        // Tablodaki satırı görsel olarak kaldır
        buttonElement.closest('tr').remove();
    }
}
// index.html içine ekleyin (Eksik fonksiyonu tamamlar)

function changeTopicNumberSystem() {
    const oldSec = document.getElementById('mov_old_sec').value.trim();
    const newSec = document.getElementById('mov_new_sec').value.trim();
    const resultEl = document.getElementById('mov_result');

    if (!oldSec || !newSec) {
        alert("Lütfen Eski ve Yeni konu numaralarını girin.");
        return;
    }
    if (oldSec === newSec) {
        alert("Eski ve yeni numara aynı olamaz.");
        return;
    }

    // Güvenlik onayı
    if (!confirm(`DİKKAT: ${oldSec} numaralı konuyu ve İÇİNDEKİ TÜM CÜMLELERİ ${newSec} numarasına taşımak üzeresiniz.\n\nBu işlem:\n1. Konu başlığını (varsa) taşır.\n2. Tüm fiillerin altındaki bu konuya ait cümleleri yeni numaraya aktarır.\n\nDevam edilsin mi?`)) return;

    let movedSentencesCount = 0;
    let movedTopicName = "";

    // 1. BAŞLIĞI TAŞI (Topic Pool - Konu Havuzu)
    // "Konu havuzu eklemedik" deseniz bile kodun içinde data.topicPool yapısı var, onu güncelliyoruz.
    if (data.topicPool && data.topicPool[oldSec]) {
        movedTopicName = data.topicPool[oldSec];
        
        // Yeni numarada zaten bir başlık var mı?
        if (data.topicPool[newSec]) {
            if (!confirm(`UYARI: ${newSec} numarasında zaten "${data.topicPool[newSec]}" isminde bir konu var.\nÜzerine yazılıp "${movedTopicName}" olarak değiştirilsin mi?`)) {
                return; // İptal
            }
        }
        data.topicPool[newSec] = movedTopicName;
        delete data.topicPool[oldSec];
    } else {
        console.log("Bu numara için kayıtlı bir konu başlığı bulunamadı, sadece cümleler taşınacak.");
    }

    // 2. CÜMLELERİ TAŞI (data.content)
    // Tüm fiil ve bölüm kombinasyonlarını tarıyoruz
    Object.keys(data.content).forEach(key => {
        // Anahtar yapısı: "fiilID_sKonuNo" (Örn: v1_s6)
        // Regex ile anahtarın sonunun "_sESKİNO" ile bitip bitmediğine bakıyoruz.
        const regex = new RegExp(`_s${oldSec}$`);
        
        if (regex.test(key)) {
            const verbId = key.replace(regex, ''); // "v1_s6" -> "v1" kalır
            const newKey = `${verbId}_s${newSec}`; // Yeni anahtar: "v1_s16"
            
            const sentencesToMove = data.content[key];
            
            if (sentencesToMove && sentencesToMove.length > 0) {
                // Yeni adres zaten dolu mu?
                if (data.content[newKey]) {
                    // Doluysa sonuna ekle (Merge)
                    data.content[newKey] = data.content[newKey].concat(sentencesToMove);
                } else {
                    // Boşsa direkt taşı
                    data.content[newKey] = sentencesToMove;
                }
                movedSentencesCount += sentencesToMove.length;
            }
            
            // Eski adresi sil
            delete data.content[key];
        }
    });

    // 3. İPUÇLARINI TAŞI (data.hints)
    // İpucu anahtarları: "fiilID_sKonuNo_Index" (Örn: v1_s6_0)
    if (data.hints && data.hints.sentences) {
        const searchPart = `_s${oldSec}_`; // "_s6_" parçasını arıyoruz
        const replacePart = `_s${newSec}_`; // "_s16_" ile değiştireceğiz

        Object.keys(data.hints.sentences).forEach(hintKey => {
             if (hintKey.includes(searchPart)) {
                 const newHintKey = hintKey.replace(searchPart, replacePart);
                 data.hints.sentences[newHintKey] = data.hints.sentences[hintKey];
                 delete data.hints.sentences[hintKey];
             }
        });
    }

    // 4. KAYDET VE BİTİR
    saveContentOverride();
    
    const successMsg = `✅ Başarılı! ${movedTopicName ? '"'+movedTopicName+'" ' : ''}konusu (${oldSec} -> ${newSec}) olarak değiştirildi.\nToplam ${movedSentencesCount} adet cümle yeni numaraya taşındı.`;
    
    if (resultEl) resultEl.textContent = successMsg;
    alert(successMsg);
    
    // Eğer "Toplu Düzenleme" sayfası açıksa listeleri yenile ki değişikliği gör
    if (document.getElementById('bulk_edit_section')) {
        // Bu fonksiyon varsa çağıralım
        try { fillBulkEditSelectors(); } catch(e) {} 
    }
}
function renderGroupOrderList() {
    const listContainer = document.getElementById('groupOrderList');
    if (!listContainer) return;
    listContainer.innerHTML = '';
    data.groups.forEach((group, index) => {
        const li = document.createElement('li');
        li.style.cssText = 'display: flex; justify-content: space-between; align-items: center; padding: 8px; border: 1px solid #ccc; margin-bottom: 4px; border-radius: 4px; background: #f9f9f9; color: #0f172a;';
        li.dataset.groupId = group.id;
        const upDisabled = index === 0 ? 'disabled' : '';
        const downDisabled = index === data.groups.length - 1 ? 'disabled' : '';
        const upBtn = `<button class="btn btn-small btn-secondary" style="width:30px; margin:2px;" ${upDisabled} onclick="moveGroup(${index}, 'up')">▲</button>`;
        const downBtn = `<button class="btn btn-small btn-secondary" style="width:30px; margin:2px;" ${downDisabled} onclick="moveGroup(${index}, 'down')">▼</button>`;
        li.innerHTML = `
            <div style="font-weight: bold; width: 40px;">${group.id}</div>
            <div style="flex-grow: 1;">${group.name}</div>
            <div style="display:flex; flex-direction:column;">${upBtn} ${downBtn}</div>
        `;
        listContainer.appendChild(li);
    });
}
function moveGroup(index, direction) {
    const groups = data.groups;
    const newIndex = direction === 'up' ? index - 1 : index + 1;
    if (newIndex >= 0 && newIndex < groups.length) {
        [groups[index], groups[newIndex]] = [groups[newIndex], groups[index]];
        renderGroupOrderList(); 
    }
}
function adminSaveGroupOrder() {
    saveContentOverride();
    alert('✅ Yeni Grup Sıralaması Başarıyla Kaydedildi!');
    showAdminForm('groupOrder'); 
}
function showGroupVerbImporter() {
  document.getElementById('adminTsvArea').style.display = 'none'; 
  document.getElementById('adminGroupVerbArea').style.display = 'block';
  document.getElementById('groupVerbPasteArea').value = '';
}


function showTsvImporter() {
   document.getElementById('adminGroupVerbArea').style.display = 'none';
    const tsvArea = document.getElementById('adminTsvArea');
    tsvArea.style.display = 'block';
    document.getElementById('tsvPasteArea').value = '';
    document.getElementById('tsvPreviewArea').innerHTML = '';
    document.getElementById('bulkImportContentArea').style.display = 'none';

    const groupSelect = document.getElementById('bulk_import_group');
    const verbSelect = document.getElementById('bulk_import_verb');

    fillSelect('bulk_import_group', data.groups.map(g => ({ v: g.id, t: g.name })), true);

    groupSelect.onchange = () => {
        const gid = groupSelect.value;
        const verbs = (data.verbs[gid] || []).map(v => ({ v: v.id, t: `${v.verbTR || v.verbDE} (${v.id})` }));
        fillSelect('bulk_import_verb', verbs, true);
        document.getElementById('bulkImportContentArea').style.display = 'none';
        document.getElementById('tsvPreviewArea').innerHTML = '';
    };

    verbSelect.onchange = () => {
        const vid = verbSelect.value;
        document.getElementById('bulkImportContentArea').style.display = vid ? 'block' : 'none';
        document.getElementById('tsvPreviewArea').innerHTML = '';
    };

    // İlk yüklemede tetikle
    groupSelect.onchange();
}


function adminPreviewTsv() {
    const tsvData = document.getElementById('tsvPasteArea').value.trim();
    const previewArea = document.getElementById('tsvPreviewArea');
    const verbId = document.getElementById('bulk_import_verb').value;
    const groupId = document.getElementById('bulk_import_group').value;

    if (!tsvData) {
        previewArea.innerHTML = '<p style="color: red;">Önizleme için veri yapıştırın.</p>';
        return;
    }

    const lines = tsvData.split('\n');
    const delimiter = ';'; // Format ; olarak belirlendi
    let validCount = 0, warningCount = 0, errorCount = 0;

    let tableHtml = `
        <h4 style="margin-bottom: 10px;">İçe Aktarma Önizlemesi (Grup: ${groupId} / Fiil: ${verbId})</h4>
        <table style="width:100%; border-collapse: collapse; font-size: 0.9em;">
            <thead>
                <tr style="text-align:left; background: #f0f0f0;">
                    <th style="padding: 5px; width: 80px;">Durum</th>
                    <th style="padding: 5px;">Konu ID</th>
                    <th style="padding: 5px;">TR Cümle</th>
                    <th style="padding: 5px;">DE Cümle</th>
                    <th style="padding: 5px;">Not</th>
                </tr>
            </thead>
            <tbody>`;

    lines.forEach((line) => {
        line = line.trim();
        if (!line) return;

        const columns = line.split(delimiter).map(c => c.trim().replace(/^"|"$/g, ''));
        let status = '✅ Geçerli', statusColor = '#e6fffa', note = '';

        if (columns.length < 3) {
            status = '❌ Hatalı'; statusColor = '#fff5f5'; note = 'Eksik sütun (en az 3 sütun gerekli).'; errorCount++;
        } else {
            const [sec, tr, de] = columns;
            if (!sec || !tr || !de) {
                status = '❌ Hatalı'; statusColor = '#fff5f5'; note = 'Konu ID, TR veya DE Cümle boş olamaz.'; errorCount++;
            } else if (!data.topicPool[sec]) {
                status = '⚠️ Uyarı'; statusColor = '#fffaf0'; note = `Konu ID (${sec}) sistemde bulunamadı.`; warningCount++;
            } else {
                validCount++;
            }
        }

        tableHtml += `
            <tr style="background-color: ${statusColor}; border-bottom: 1px solid #ddd;" data-row-data="${escapeHtml(JSON.stringify(columns))}" data-status="${status === '✅ Geçerli' ? 'valid' : 'invalid'}">
                <td style="padding: 5px;"><b>${status}</b></td>
                <td style="padding: 5px;">${columns[0] || ''}</td>
                <td style="padding: 5px;">${columns[1] || ''}</td>
                <td style="padding: 5px;">${columns[2] || ''}</td>
                <td style="padding: 5px;">${note}</td>
            </tr>`;
    });

    tableHtml += '</tbody></table>';

    let summaryHtml = `
        <div style="margin-top: 15px; padding: 10px; background: #f7fafc; border-radius: 8px;">
            <b>Özet:</b> 
            <span style="color: #2f855a;">${validCount} cümle içe aktarılacak.</span> | 
            <span style="color: #dd6b20;">${warningCount} uyarı (Konu ID'leri kontrol edilecek).</span> | 
            <span style="color: #c53030;">${errorCount} hatalı satır (İçe aktarılmayacak).</span>
        </div>`;

    if (validCount > 0 || warningCount > 0) { // Uyarıları da aktarma seçeneği sunalım
        summaryHtml += `
            <div class="button-group-row" style="margin-top: 15px;">
                <button class="btn btn-success" onclick="adminImportTsvFromPreview()">✅ Geçerli ve Uyarılı Satırları İçe Aktar</button>
            </div>`;
    }

    previewArea.innerHTML = tableHtml + summaryHtml;
}
function adminImportTsvFromPreview() {
    const rows = document.querySelectorAll('#tsvPreviewArea tbody tr');
    const verbId = document.getElementById('bulk_import_verb').value;
    let sentencesAdded = 0, hintsAdded = 0;

    rows.forEach(row => {
        // Sadece 'valid' veya 'warning' olanları al (hatalıları alma)
        if (row.dataset.status === 'invalid') return;

        const rowData = JSON.parse(row.dataset.rowData);
        const [sec, tr, de, hint] = rowData;
        const contentKey = `${verbId}_s${sec}`;

        if (!data.content[contentKey]) data.content[contentKey] = [];
        const newIndex = data.content[contentKey].length;
        data.content[contentKey].push({ tr, de });
        sentencesAdded++;

        if (hint) {
            const hintKey = getSrsKey(verbId, sec, newIndex);
            if (!data.hints) data.hints = { sentences: {} };
            if (!data.hints.sentences) data.hints.sentences = {};
            data.hints.sentences[hintKey] = hint;
            hintsAdded++;
        }
    });

    if (sentencesAdded > 0) {
        saveContentOverride();
        alert(`İçe Aktarma Başarılı!\n✅ Eklenen Cümle: ${sentencesAdded}\n💡 Eklenen İpucu: ${hintsAdded}`);
        showTsvImporter(); // Formu sıfırla
    } else {
        alert('İçe aktarılacak geçerli veya uyarılı cümle bulunamadı.');
    }
}
function showAdminForm(formType) {
    const area = document.getElementById('adminContentArea');
    area.style.display = 'block';
    area.innerHTML = 'Yükleniyor...';
    if (formType === 'addGroup') showAdminGroupForm(area);
    else if (formType === 'addVerb') showAdminVerbForm(area);
    else if (formType === 'addSection') adminShowTopicPoolForm(area); 
    else if (formType === 'classManagement') adminShowClassManagement(area); // YENİ
    else if (formType === 'addStory') showAdminStoryForm(area);
    else if (formType === 'addHint') showAdminHintForm(area);
    else if (formType === 'editSentence') showAdminSentenceForm(area);
    else if (formType === 'groupOrder') showAdminGroupOrderForm(area); 
    else if (formType === 'editGuide') showAdminGuideForm(area); // YENİ: Kılavuz
    else if (formType === 'domainManager') showAdminDomainForm(area);
    else area.innerHTML = 'Form bulunamadı.';
}
/* --- ID VE VERİ TAŞIMA SİSTEMİ (MIGRATION) --- */

function executeMigration() {
    const type = document.getElementById('mig_type').value;
    const oldId = document.getElementById('mig_old_id').value.trim();
    const newId = document.getElementById('mig_new_id').value.trim();
    const resultEl = document.getElementById('mig_result');

    if (!oldId || !newId) {
        alert("Lütfen Eski ve Yeni ID'leri girin.");
        return;
    }
    if (oldId === newId) {
        alert("Eski ve Yeni ID aynı olamaz.");
        return;
    }

    // 1. FİİL TAŞIMA İŞLEMİ
    if (type === 'verb') {
        // A. Fiil Tanımını Bul ve Güncelle
        let verbFound = false;
        let parentGroupId = null;

        // Tüm grupları gez, fiili bul
        for (const [gid, verbs] of Object.entries(data.verbs)) {
            const vIndex = verbs.findIndex(v => v.id === oldId);
            if (vIndex > -1) {
                // Fiili bulduk, ID'sini güncelle
                verbs[vIndex].id = newId; 
                parentGroupId = gid;
                verbFound = true;
                break; 
            }
        }

        if (!verbFound) {
            // Eğer fiil listede yoksa bile (belki silinmiştir) içerik taşımasına izin verelim mi?
            // Veri kurtarma için evet.
            console.warn("Fiil tanımı listede bulunamadı, sadece içerikler taşınacak.");
        }

        // B. Cümleleri ve İpuçlarını Taşı (data.content & data.hints)
        let movedCount = 0;
        
        // TopicPool'daki veya Section'lardaki tüm olası kombinasyonları tara
        // (Veya mevcut tüm data.content anahtarlarını tara - daha güvenli)
        Object.keys(data.content).forEach(key => {
            // Anahtar şununla başlıyorsa: "oldId_s..."
            if (key.startsWith(`${oldId}_s`)) {
                const suffix = key.substring(oldId.length); // "_s1" kısmını al
                const newKey = `${newId}${suffix}`;         // "newId_s1" yap
                
                // Veriyi taşı
                data.content[newKey] = data.content[key];
                delete data.content[key]; // Eski veriyi sil
                movedCount++;
            }
        });

        // C. İpuçlarını Taşı (data.hints)
        // İpuçları "verbID_s1_0" formatında bir anahtar (srsKey) kullanırsa onları da güncellemeliyiz.
        // Ancak şu an srsKey'i dinamik oluşturuyoruz, o yüzden data.content taşınınca ipuçları da dolaylı olarak kurtulur mu?
        // Hayır, data.hints.sentences içinde KEY olarak saklanıyor olabilir. Kontrol edelim.
        if (data.hints && data.hints.sentences) {
            Object.keys(data.hints.sentences).forEach(hintKey => {
                if (hintKey.startsWith(`${oldId}_s`)) {
                    const suffix = hintKey.substring(oldId.length);
                    const newHintKey = `${newId}${suffix}`;
                    
                    data.hints.sentences[newHintKey] = data.hints.sentences[hintKey];
                    delete data.hints.sentences[hintKey];
                }
            });
        }

        resultEl.textContent = `✅ Başarılı! Fiil ID'si "${oldId}" -> "${newId}" olarak değiştirildi. ${movedCount} adet konu içeriği yeni adrese taşındı.`;
    }

    // 2. GRUP TAŞIMA İŞLEMİ
    else if (type === 'group') {
        // A. Grup Tanımını Güncelle
        const group = data.groups.find(g => g.id === oldId);
        if (group) {
            group.id = newId;
        } else {
            alert("Uyarı: Bu ID'ye sahip bir grup bulunamadı. Sadece fiil listeleri taşınacak.");
        }

        // B. Bu gruba ait Fiil Listesini Taşı (data.verbs[gid])
        if (data.verbs[oldId]) {
            data.verbs[newId] = data.verbs[oldId];
            delete data.verbs[oldId];
            resultEl.textContent = `✅ Başarılı! Grup ID'si "${oldId}" -> "${newId}" yapıldı ve içindeki fiiller yeni gruba aktarıldı.`;
        } else {
            resultEl.textContent = `✅ Grup ID güncellendi ancak bu gruba ait fiil listesi boştu.`;
        }
    }

    saveSettings(); // Kaydet
    // Arayüzü yenile (Gerekirse)
    // fillBulkEditSelectors(); 
}
/* --- GÜNCELLENMİŞ GRUP YÖNETİMİ (ALAN SEÇİMLİ) --- */

function showAdminGroupForm(area) {
    const t = getMergedTranslations(data.settings.language || 'tr');
    
    // Grup Listesini Hazırla
    let options = data.groups.map(g => `<option value="${g.id}">${g.name} (${g.id})</option>`).join('');
    
    // Alan (Domain) Listesini Hazırla (YENİ)
    let domainOptions = '<option value="">-- Alan Yok (Genel) --</option>';
    if (data.domains) {
        data.domains.forEach(d => {
            domainOptions += `<option value="${d.id}">${d.name} (${d.nameDE || ''})</option>`;
        });
    }

    // Form HTML'i
    area.innerHTML = `<div class="content-box"><h4>${t.admin.addGroup}</h4>
      <label>${t.labels.group} (Düzenlemek için seçin)</label>
      <select id="adm_g_select" class="select-field"><option value="">-- YENİ GRUP --</option>${options}</select>
      
      <div style="background:#f0fff4; padding:10px; border-radius:8px; margin:15px 0; border:1px solid #48bb78;">
          <label style="font-weight:bold; color:#2f855a;">📂 Bağlı Olduğu Alan (Kategori)</label>
          <select id="adm_g_domain" class="select-field" style="border-color:#48bb78;">
              ${domainOptions}
          </select>
          <p class="small-muted" style="margin-top:5px;">Bu grubun ana ekranda hangi sekmede görüneceğini belirler.</p>
      </div>

      <label>${t.labels.groupID}</label><input id="adm_g_id" class="input-field">
      <label>${t.labels.groupNameTR}</label><input id="adm_g_name_tr" class="input-field">
      <label>${t.labels.groupNameDE}</label><input id="adm_g_name_de" class="input-field">
      
      <div class="button-group-row">
        <button class="btn btn-primary" onclick="adminSaveGroup()">✅ ${t.buttons.save}</button>
        <button class="btn btn-danger" onclick="adminDeleteGroup()">🗑 ${t.buttons.delete}</button>
      </div></div>`;

    // Seçim değiştiğinde verileri doldur
    document.getElementById('adm_g_select').onchange = (e) => {
        const gid = e.target.value;
        const g = data.groups.find(x => x.id === gid);
        if (g) {
            // Düzenleme Modu
            document.getElementById('adm_g_id').value = g.id;
            document.getElementById('adm_g_id').readOnly = true;
            document.getElementById('adm_g_name_tr').value = g.name;
            document.getElementById('adm_g_name_de').value = g.nameDE || '';
            // Kayıtlı Alanı Getir
            document.getElementById('adm_g_domain').value = g.domainId || ''; 
        } else {
            // Yeni Kayıt Modu
            document.getElementById('adm_g_id').value = '';
            document.getElementById('adm_g_id').readOnly = false;
            document.getElementById('adm_g_name_tr').value = '';
            document.getElementById('adm_g_name_de').value = '';
            document.getElementById('adm_g_domain').value = '';
        }
    };
}

function adminSaveGroup() {
    const selId = document.getElementById('adm_g_select').value;
    const id = document.getElementById('adm_g_id').value.trim();
    const name = document.getElementById('adm_g_name_tr').value.trim();
    const named = document.getElementById('adm_g_name_de').value.trim();
    
    // YENİ: Alan Seçimini Al
    const domainId = document.getElementById('adm_g_domain').value; 

    if (!id || !name) { alert('ID ve TR İsim gerekli'); return; }
    
    let g = data.groups.find(x => x.id === (selId || id));
    
    if (g) {
        // GÜNCELLEME
        g.name = name;
        g.nameDE = named;
        g.domainId = domainId; // Alan bilgisini güncelle
        alert('✅ Grup ve Alan bilgisi güncellendi');
    } else {
        // YENİ EKLEME
        if (data.groups.find(x => x.id === id)) { alert('Bu ID zaten var'); return; }
        
        data.groups.push({ 
            id: id, 
            name: name, 
            nameDE: named, 
            domainId: domainId, // Alan bilgisiyle kaydet
            story: null 
        });
        
        if (!data.verbs[id]) data.verbs[id] = [];
        alert('✅ Yeni Grup eklendi');
    }
    
    saveContentOverride();
    showAdminForm('addGroup'); // Formu yenile
}
function adminDeleteGroup() {
    const selId = document.getElementById('adm_g_select').value;
    if (!selId) { alert('Silmek için bir grup seçin'); return; }
    if (!confirm(`'${selId}' grubunu silmek istediğinizden emin misiniz? (İçindeki fiiller ve içerikler de silinebilir!)`)) return;
    data.groups = data.groups.filter(g => g.id !== selId);
    delete data.verbs[selId];
    alert('Grup silindi');
    saveContentOverride();
    showAdminForm('addGroup');
}
function showAdminVerbForm(area) {
    const t = getMergedTranslations(data.settings.language || 'tr');
    let groupOptions = data.groups.map(g => `<option value="${g.id}">${g.name}</option>`).join('');
    area.innerHTML = `<div class="content-box"><h4>${t.admin.addVerb}</h4>
      <label>${t.labels.group}</label>
      <select id="adm_v_group" class="select-field">${groupOptions}</select>
      <label>${t.labels.verb} (Düzenlemek için seçin)</label>
      <select id="adm_v_select" class="select-field"><option value="">-- YENİ FİİL --</option></select>
      <label>${t.labels.verbID}</label><input id="adm_v_id" class="input-field">
      <label>${t.labels.verbTR}</label><input id="adm_v_tr" class="input-field">
      <label>${t.labels.verbDE}</label><input id="adm_v_de" class="input-field">
      <div class="button-group-row">
        <button class="btn btn-primary" onclick="adminSaveVerb()">✅ ${t.buttons.save}</button>
        <button class="btn btn-danger" onclick="adminDeleteVerb()">🗑 ${t.buttons.delete}</button>
      </div></div>`;
    const groupSelect = document.getElementById('adm_v_group');
    const verbSelect = document.getElementById('adm_v_select');
    const loadVerbs = () => {
        const gid = groupSelect.value;
        verbSelect.innerHTML = '<option value="">-- YENİ FİİL --</option>';
        if (!gid || !data.verbs[gid]) { adminLoadVerbFields(); return; }
        const verbOptions = (data.verbs[gid] || []).map(v => `<option value="${v.id}">${v.verbTR || v.verbDE} (${v.id})</option>`).join('');
        verbSelect.innerHTML += verbOptions;
        adminLoadVerbFields();
    };
    groupSelect.onchange = loadVerbs;
    verbSelect.onchange = adminLoadVerbFields;
    if(groupSelect.options.length > 0) groupSelect.selectedIndex = 0;
    loadVerbs();
}
function adminLoadVerbFields() {
    const gid = document.getElementById('adm_v_group').value;
    const vid = document.getElementById('adm_v_select').value;
    const v = (data.verbs[gid] || []).find(x => x.id === vid);
    if (v) {
        document.getElementById('adm_v_id').value = v.id;
        document.getElementById('adm_v_id').readOnly = true;
        document.getElementById('adm_v_tr').value = v.verbTR || '';
        document.getElementById('adm_v_de').value = v.verbDE || '';
    } else {
        document.getElementById('adm_v_id').value = '';
        document.getElementById('adm_v_id').readOnly = false;
        document.getElementById('adm_v_tr').value = '';
        document.getElementById('adm_v_de').value = '';
    }
}
// index.html, adminShowClassManagement fonksiyonu (SADELEŞTİRİLMİŞ VE GÜNCELLENMİŞ)

function adminShowClassManagement(area) {
    const t = getMergedTranslations(data.settings.language || 'tr');
    area.innerHTML = `
        <div id="classManagementTab" class="content-box">
            <h4>🎓 Sınıf Yönetimi</h4>
            <p class="small-muted">Yeni sınıf ekleyin veya mevcut sınıfların adını düzenleyin.</p>
            <div class="button-group-row">
                <input type="text" id="newClassId" placeholder="ID (Örn: C1)" style="width: 100px;">
                <input type="text" id="newClassName" placeholder="Sınıf Adı (Örn: İleri Seviye)" style="flex-grow: 1;">
                <button class="btn btn-primary" onclick="adminAddOrUpdateClass()">Kaydet / Güncelle</button>
            </div>
            <div id="classListContainer"></div>
        </div>`;
    adminLoadClassListSimple();
}

// Sınıf Listesini Yükle (Sadece Düzenle ve Sil butonu var)
function adminLoadClassListSimple() {
    const container = document.getElementById('classListContainer');
    if (!container) return;
    
    container.innerHTML = '';
    if (!data.classes || data.classes.length === 0) {
        container.innerHTML = '<p>Henüz sınıf tanımlanmamış.</p>';
        return;
    }

    let html = '<table style="width:100%; border-collapse: collapse; margin-top: 15px;">';
    data.classes.forEach(c => {
        html += `
            <tr style="border-bottom: 1px solid #eee;">
                <td style="padding: 8px; width: 20%;"><strong>${c.id}</strong></td>
                <td style="padding: 8px;">${c.name}</td>
                <td style="padding: 8px; text-align: right;">
                    <button class="btn btn-small btn-warning" onclick="adminPrepareClassEdit('${c.id}', '${c.name}')">✏️ Düzenle</button>
                    <button class="btn btn-small btn-danger" onclick="adminDeleteClass('${c.id}')">🗑 Sil</button>
                </td>
            </tr>
        `;
    });
    html += '</table>';
    container.innerHTML = html;
}

// index.html, adminAddOrUpdateClass fonksiyonunu bulun ve aşağıdaki ile değiştirin.
function adminAddOrUpdateClass() {
    const idInput = document.getElementById('newClassId');
    const nameInput = document.getElementById('newClassName');
    const id = idInput.value.trim().toUpperCase();
    const name = nameInput.value.trim();

    if (!id || !name) { alert('Lütfen ID ve İsim girin.'); return; }

    // Mevcut sınıf var mı kontrol et
    const existingClass = data.classes.find(c => c.id === id);

    if (existingClass) {
        // VARSA GÜNCELLE
        existingClass.name = name;
        existingClass.nameDE = name; 
        alert(`Sınıf (${id}) ismi güncellendi.`);
    } else {
        // YOKSA EKLE
        data.classes.push({ id: id, name: name, nameDE: name });
        if (!data.topics[id]) data.topics[id] = {}; // Yeni sınıf için boş konu listesi aç
        alert(`Yeni Sınıf (${id}) eklendi.`);
    }
    
    // 🚩 KRİTİK DÜZELTME: Değişiklikleri kalıcı olarak kaydet.
    saveContentOverride(); 
    
    idInput.value = '';
    nameInput.value = '';
    adminLoadClassListSimple();
}

// Düzenle butonuna basınca inputları doldurur
function adminPrepareClassEdit(id, name) {
    document.getElementById('newClassId').value = id;
    document.getElementById('newClassId').readOnly = true; // ID değiştirilemez, sadece isim
    document.getElementById('newClassName').value = name;
    document.getElementById('newClassName').focus();
    alert('Sınıf bilgileri yukarıya taşındı. İsmi değiştirip "Kaydet/Güncelle" butonuna basın.');
}
function adminSaveVerb() {
    const gid = document.getElementById('adm_v_group').value;
    const selId = document.getElementById('adm_v_select').value;
    const id = document.getElementById('adm_v_id').value.trim();
    const vtr = document.getElementById('adm_v_tr').value.trim();
    const vde = document.getElementById('adm_v_de').value.trim();
    if (!gid || !id || (!vtr && !vde)) { alert('Grup, Fiil ID ve TR/DE adı gerekli'); return; }
    if (!data.verbs[gid]) data.verbs[gid] = [];
    let v = data.verbs[gid].find(x => x.id === (selId || id));
    if (v) {
        v.verbTR = vtr;
        v.verbDE = vde;
        alert('Fiil güncellendi');
    } else {
        if (data.verbs[gid].find(x => x.id === id)) { alert('Bu ID bu grupta zaten var'); return; }
        data.verbs[gid].push({ id: id, verbTR: vtr, verbDE: vde });
        alert('Fiil eklendi');
    }
    saveContentOverride();
    showAdminForm('addVerb');
}
function adminDeleteVerb() {
    const gid = document.getElementById('adm_v_group').value;
    const selId = document.getElementById('adm_v_select').value;
    if (!selId || !gid) { alert('Silmek için bir grup ve fiil seçin'); return; }
    if (!confirm(`'${selId}' fiilini silmek istediğinizden emin misiniz?`)) return;
    data.verbs[gid] = (data.verbs[gid] || []).filter(v => v.id !== selId);
    alert('Fiil silindi');
    saveContentOverride();
    showAdminForm('addVerb');
}
// index.html, adminDeleteClass fonksiyonunu bulun ve aşağıdaki ile değiştirin.
function adminDeleteClass(classId) {
    if (!confirm(`'${classId}' sınıfını silmek istediğinizden emin misiniz? Bu, o sınıfa bağlı TÜM Konu/Bölüm ayarlarını da siler.`)) return;

    data.classes = data.classes.filter(c => c.id !== classId);
    
    // O sınıfa ait tüm konu (topic) ayarlarını sil
    if (data.topics[classId]) {
        delete data.topics[classId];
    }

    // 🚩 KRİTİK DÜZELTME: Değişiklikleri kalıcı olarak kaydet.
    saveContentOverride(); 
    
    alert(`Sınıf ${classId} silindi.`);
    adminLoadClassListSimple();
}

function adminShowTopicPoolForm(area) {
    const t = getMergedTranslations(data.settings.language || 'tr');
    
    // Konu Listesi (Dropdown için)
    let topicOptions = Object.entries(data.topicPool).map(([num, name]) => `<option value="${num}">${num}. ${name}</option>`).join('');
    
    // Sınıf Listesi (Görünürlük Seçimi için)
    // "bağımsız" seçeneğini en başa ekliyoruz
    let classOptions = `<option value="independent">🌐 BAĞIMSIZ (Tüm Sınıflarda Göster)</option>`;
    data.classes.forEach(c => {
        classOptions += `<option value="${c.id}">Sadece ${c.id} (${c.name})</option>`;
    });

    area.innerHTML = `
        <div class="content-box">
            <h4>📚 Konu (Bölüm) Yönetimi</h4>
            
            <label>Düzenlenecek Konuyu Seç (Yeni eklemek için boş bırakın)</label>
            <select id="adm_tp_select" class="select-field" onchange="adminLoadTopicDetailsToForm()">
                <option value="">-- YENİ KONU OLUŞTUR --</option>
                ${topicOptions}
            </select>

            <hr style="margin: 15px 0; border: 0; border-top: 1px solid #ddd;">

            <label>${t.labels.sectionNum} (ID)</label>
            <input id="adm_tp_num" class="input-field" type="number" placeholder="Örn: 15">
            
            <label>${t.labels.sectionName} (Konu Başlığı)</label>
            <input id="adm_tp_name" class="input-field" placeholder="Örn: Edatlar">
            
            <label style="margin-top: 10px; font-weight: bold; color: #667eea;">🔗 Hangi Sınıfta Görünsün?</label>
            <select id="adm_tp_visibility" class="select-field" style="border: 2px solid #667eea;">
                ${classOptions}
            </select>
            <p class="small-muted">"Bağımsız" seçerseniz konu A1, A2, B1 gibi TÜM sınıflara eklenir.</p>

            <div class="button-group-row">
                <button class="btn btn-primary" onclick="adminSaveTopicWithLink()">✅ Kaydet ve Bağla</button>
                <button class="btn btn-danger" onclick="adminDeleteTopicPool()">🗑 Konuyu Sil</button>
            </div>
        </div>
        
        <div id="topicListPreview" class="content-box" style="margin-top:15px; max-height: 300px; overflow-y:auto;">
             <h5>Mevcut Konu Havuzu:</h5>
             ${renderSimpleTopicList()}
        </div>`;
}

// Formdaki basit liste görünümü için yardımcı fonksiyon
function renderSimpleTopicList() {
    if (!data.topicPool) return '';
    return Object.entries(data.topicPool).map(([id, name]) => `<div><b>${id}.</b> ${name}</div>`).join('');
}

// Seçilen konunun bilgilerini forma doldurur
function adminLoadTopicDetailsToForm() {
    const selNum = document.getElementById('adm_tp_select').value;
    if (!selNum) {
        // Yeni konu modu: Alanları temizle
        document.getElementById('adm_tp_num').value = '';
        document.getElementById('adm_tp_num').readOnly = false;
        document.getElementById('adm_tp_name').value = '';
        document.getElementById('adm_tp_visibility').value = 'independent'; // Varsayılan bağımsız
        return;
    }

    // Mevcut konuyu yükle
    const name = data.topicPool[selNum];
    document.getElementById('adm_tp_num').value = selNum;
    document.getElementById('adm_tp_num').readOnly = true; // ID değiştirilemez
    document.getElementById('adm_tp_name').value = name;

    // Konunun hangi sınıfa bağlı olduğunu bulmaya çalış (Görünürlük ayarını tahmin et)
    let foundClass = null;
    let linkedCount = 0;
    
    Object.keys(data.topics).forEach(classId => {
        if (data.topics[classId][selNum]) {
            linkedCount++;
            foundClass = classId;
        }
    });

    // Eğer konu sınıf sayısı kadar yerde varsa "Bağımsız"dır, yoksa tek bir sınıftadır
    if (linkedCount >= data.classes.length) {
        document.getElementById('adm_tp_visibility').value = 'independent';
    } else if (linkedCount === 1 && foundClass) {
        document.getElementById('adm_tp_visibility').value = foundClass;
    } else {
        // Karmaşık durum (örn: hem A1 hem A2'de ama B1'de yok), varsayılan bağımsız gösterelim
        document.getElementById('adm_tp_visibility').value = 'independent'; 
    }
}
// index.html, adminSaveTopicWithLink fonksiyonu (YENİ KAYDETME MANTIĞI)

function adminSaveTopicWithLink() {
    const selNum = document.getElementById('adm_tp_select').value; // Düzenleme modu mu?
    const num = document.getElementById('adm_tp_num').value.trim();
    const name = document.getElementById('adm_tp_name').value.trim();
    const visibility = document.getElementById('adm_tp_visibility').value; // independent veya ClassID

    if (!num || !name) { alert('Numara ve İsim gereklidir.'); return; }

    // 1. KONUYU HAVUZA KAYDET (Master List)
    // Eğer yeni ekliyorsak ve numara zaten varsa uyar
    if (!selNum && data.topicPool[num]) {
        alert('Bu konu numarası zaten kullanılıyor. Lütfen başka bir numara verin.');
        return;
    }
    data.topicPool[num] = name;

    // 2. BAĞLANTILARI AYARLA (Sınıflara Dağıt)
    if (visibility === 'independent') {
        // Seçenek: BAĞIMSIZ -> Tüm sınıflara ekle
        data.classes.forEach(c => {
            if (!data.topics[c.id]) data.topics[c.id] = {};
            // Konuyu sınıfa ekle (İsmi de Master listesindeki gibi yap)
            data.topics[c.id][num] = name; 
        });
    } else {
        // Seçenek: TEK SINIF (Örn: A1)
        const targetClassId = visibility;
        
        // a) Hedef sınıfa ekle
        if (!data.topics[targetClassId]) data.topics[targetClassId] = {};
        data.topics[targetClassId][num] = name;

        // b) DİĞER sınıflardan kaldır (Çünkü artık bağımsız değil, sadece buraya özel)
        data.classes.forEach(c => {
            if (c.id !== targetClassId) {
                if (data.topics[c.id] && data.topics[c.id][num]) {
                    delete data.topics[c.id][num];
                }
            }
        });
    }

    alert(`Konu (${num}. ${name}) kaydedildi ve görünürlük ayarlandı: ${visibility === 'independent' ? 'TÜM SINIFLAR' : visibility}`);
    saveContentOverride();
    
    // Formu yenile
    adminShowTopicPoolForm(document.getElementById('adminContentArea'));
}
function adminDeleteTopicPool() {
    const selNum = document.getElementById('adm_tp_select').value;
    if (!selNum) { alert('Silmek için bir konu seçin'); return; }
    if (!confirm(`'${selNum}' numaralı konuyu havuzdan silmek istediğinizden emin misiniz? Bu, tüm sınıflardan kaldırılacaktır.`)) return;
    
    delete data.topicPool[selNum];
    
    // Bağlı olduğu tüm sınıflardan da kaldır
    Object.keys(data.topics).forEach(classId => {
        if (data.topics[classId][selNum]) {
            delete data.topics[classId][selNum];
        }
    });

    alert('Konu silindi');
    saveContentOverride();
    adminShowTopicPoolForm(document.getElementById('adminContentArea'));
}

function showAdminStoryForm(area) {
    const t = getMergedTranslations(data.settings.language || 'tr');
    let groupOptions = data.groups.map(g => `<option value="${g.id}">${g.name}</option>`).join('');
    
    // YENİ HTML YAPISI: SADECE İKİ BAŞLIK ALANI İÇERİR
    area.innerHTML = `<div class="content-box"><h4>${t.admin.addStory}</h4>
      <label>${t.labels.group}</label>
      <select id="adm_st_group" class="select-field">${groupOptions}</select>
      
      <label>Hikaye Başlığı (Türkçe - TR)</label><input id="adm_st_title" class="input-field">
      <label>Hikaye Başlığı (Almanca - DE)</label><input id="adm_st_title_de" class="input-field">
      
      <label>${t.labels.deText}</label><textarea id="adm_st_de" class="textarea-field" rows="5"></textarea>
      <label>${t.labels.trText}</label><textarea id="adm_st_tr" class="textarea-field" rows="5"></textarea>
      <h5 style="margin-top:10px;">Hikaye Soruları (Quiz)</h5>
      <div id="adm_st_quiz_area"></div>
      <button class="btn btn-secondary btn-small" onclick="adminStoryAddQuestion()">+ Soru Ekle</button>
      <div class="button-group-row">
        <button class="btn btn-primary" onclick="adminSaveStory()">✅ ${t.buttons.save}</button>
      </div></div>`;
      
    document.getElementById('adm_st_group').onchange = adminStoryLoadFields;
    if(data.groups.length > 0) {
        document.getElementById('adm_st_group').selectedIndex = 0;
        adminStoryLoadFields(); 
    }
}
// index.html, adminStoryLoadFields fonksiyonu
function adminStoryLoadFields() {
    const gid = document.getElementById('adm_st_group').value;
    const g = data.groups.find(x => x.id === gid);
    const story = g ? g.story : null;
    
    // TR Başlığını yükle (JSON'daki 'title' anahtarı)
    document.getElementById('adm_st_title').value = story ? story.title || '' : ''; 
    // DE Başlığını yükle (JSON'daki 'titleDE' anahtarı)
    document.getElementById('adm_st_title_de').value = story ? story.titleDE || '' : '';
    
    document.getElementById('adm_st_de').value = story ? story.de || '' : '';
    document.getElementById('adm_st_tr').value = story ? story.tr || '' : '';
    
    const quizArea = document.getElementById('adm_st_quiz_area');
    quizArea.innerHTML = '';
    if (story && story.quiz) {
        story.quiz.forEach((q, i) => adminStoryAddQuestion(q));
    }
}
function adminStoryAddQuestion(q = null) {
    const t = getMergedTranslations(data.settings.language || 'tr');
    const quizArea = document.getElementById('adm_st_quiz_area');
    const index = quizArea.children.length;
    const qDiv = document.createElement('div');
    qDiv.className = 'content-box';
    qDiv.style.borderColor = '#ccc';
    qDiv.innerHTML = `
        <label>${t.labels.question} ${index + 1}</label>
        <input type="text" class="input-field adm_st_q_q" value="${q ? escapeHtml(q.q) : ''}">
        <label>${t.labels.options}</label>
        <input type="text" class="input-field adm_st_q_opts" value="${q ? escapeHtml(q.options.join(',')) : ''}">
        <label>${t.labels.correctAnswer}</label>
        <input type="text" class="input-field adm_st_q_a" value="${q ? escapeHtml(q.a) : ''}">
        <button class="btn btn-danger btn-small" style="margin-top:5px;" onclick="this.parentElement.remove()">- Sil</button>
    `;
    quizArea.appendChild(qDiv);
}
// index.html, adminSaveStory fonksiyonu
function adminSaveStory() {
    const gid = document.getElementById('adm_st_group').value;
    const g = data.groups.find(x => x.id === gid);
    if (!g) { alert('Grup bulunamadı'); return; }
    
    // Formdan TR ve DE Başlıklarını al
    const title = document.getElementById('adm_st_title').value; 
    const titleDE = document.getElementById('adm_st_title_de').value; 
    
    const de = document.getElementById('adm_st_de').value;
    const tr = document.getElementById('adm_st_tr').value;
    const quiz = [];
    document.getElementById('adm_st_quiz_area').querySelectorAll('.content-box').forEach(qDiv => {
        const q = qDiv.querySelector('.adm_st_q_q').value;
        const opts = qDiv.querySelector('.adm_st_q_opts').value.split(',').map(s => s.trim());
        const a = qDiv.querySelector('.adm_st_q_a').value;
        if (q && opts.length > 0 && a) {
            quiz.push({ q, options: opts, a });
        }
    });
    // title ve titleDE olarak kaydediliyor
    g.story = { title, titleDE, de, tr, quiz }; 
    saveContentOverride();
    alert('Hikaye kaydedildi!');
}
function showAdminHintForm(area) {
    const t = getMergedTranslations(data.settings.language || 'tr');
    area.innerHTML = `<div class="content-box"><h4>${t.admin.hintManagement}</h4>
      <label>İpucu Tipi Seç</label>
      <select id="adm_h_type" class="select-field">
        <option value="">Seçin...</option>
        <option value="section">Bölüm (Genel İpucu, örn: B1, B2)</option>
        <option value="verb">Fiil (Genel İpucu, örn: v1, v2)</option>
        <option value="sentence">Cümle (Özel İpucu, örn: v1_s1_0)</option>
      </select>
      <div id="adm_h_target_area" style="margin-top:10px;"></div>
      <label>${t.labels.hintText}</label>
      <textarea id="adm_h_text" class="textarea-field" rows="4"></textarea>
      <div class="button-group-row">
        <button class="btn btn-primary" onclick="adminSaveHint()">✅ ${t.buttons.save}</button>
      </div></div>`;
    document.getElementById('adm_h_type').onchange = adminHintLoadTargetSelectors;
}
function adminHintLoadTargetSelectors() {
    const type = document.getElementById('adm_h_type').value;
    const targetArea = document.getElementById('adm_h_target_area');
    targetArea.innerHTML = ''; 
    document.getElementById('adm_h_text').value = ''; 
    if (type === 'section') {
        let options = Object.entries(data.topicPool || {}).map(([num, name]) => `<option value="B${num}">${num}. ${name} (B${num})</option>`).join('');
        targetArea.innerHTML = `<label>Konu Seç</label><select id="adm_h_target" class="select-field">${options}</select>`;
        document.getElementById('adm_h_target').onchange = adminHintLoadText;
    }
    else if (type === 'verb') {
        let options = data.groups.map(g => {
            return (data.verbs[g.id] || []).map(v => `<option value="${v.id}">${g.name} -> ${v.verbTR || v.verbDE} (${v.id})</option>`).join('');
        }).join('');
        targetArea.innerHTML = `<label>Fiil Seç</label><select id="adm_h_target" class="select-field">${options}</select>`;
        document.getElementById('adm_h_target').onchange = adminHintLoadText;
    }
    else if (type === 'sentence') {
        let groupOptions = data.groups.map(g => `<option value="${g.id}">${g.name}</option>`).join('');
        targetArea.innerHTML = `
            <label>Grup</label><select id="adm_h_g" class="select-field">${groupOptions}</select>
            <label>Fiil</label><select id="adm_h_v" class="select-field"></select>
            <label>Bölüm</label><select id="adm_h_s" class="select-field"></select>
            <label>Cümle</label><select id="adm_h_target" class="select-field"></select>`;
        document.getElementById('adm_h_g').onchange = () => {
            const gid = document.getElementById('adm_h_g').value;
            fillSelect('adm_h_v', (data.verbs[gid] || []).map(v => ({ v: v.id, t: (v.verbTR || v.verbDE) })), false);
            adminHintLoadTargetSelectors_LoadSections();
        };
        document.getElementById('adm_h_v').onchange = adminHintLoadTargetSelectors_LoadSections;
        document.getElementById('adm_h_s').onchange = adminHintLoadTargetSelectors_LoadSentences;
        document.getElementById('adm_h_target').onchange = adminHintLoadText;
        if(data.groups.length > 0) {
             document.getElementById('adm_h_g').selectedIndex = 0;
             document.getElementById('adm_h_g').onchange();
        }
    }
}
function adminHintLoadTargetSelectors_LoadSections() {
    const vid = document.getElementById('adm_h_v').value;
    if (!vid) { fillSelect('adm_h_s', [], false); adminHintLoadTargetSelectors_LoadSentences(); return; }
    const items = Object.entries(data.topicPool || {}).map(([num, name]) => {
        const count = (data.content[`${vid}_s${num}`] || []).length;
        return { v: num, t: `${num}. ${name} (${count}c)` };
    });
    fillSelect('adm_h_s', items, false);
    adminHintLoadTargetSelectors_LoadSentences();
}
function adminHintLoadTargetSelectors_LoadSentences() {
    const vid = document.getElementById('adm_h_v').value;
    const sec = document.getElementById('adm_h_s').value;
    if (!vid || !sec) { fillSelect('adm_h_target', [], false); adminHintLoadText(); return; }
    const arr = data.content[`${vid}_s${sec}`] || [];
    const items = arr.map((s, i) => ({ v: getSrsKey(vid, sec, i), t: `${i}: ${(s.tr || s.de || '').substring(0, 50)}...` }));
    fillSelect('adm_h_target', items, false);
    adminHintLoadText();
}
function adminHintLoadText() {
    const type = document.getElementById('adm_h_type').value;
    const targetEl = document.getElementById('adm_h_target');
    if (!targetEl) { document.getElementById('adm_h_text').value = ''; return; }
    const key = targetEl.value;
    if (!key) { document.getElementById('adm_h_text').value = ''; return; }
    let hint = '';
    if (type === 'section' && data.hints && data.hints.sections) { 
        hint = data.hints.sections[key] || '';
    } else if (type === 'verb' && data.hints && data.hints.verbs) {
        hint = data.hints.verbs[key] || '';
    } else if (type === 'sentence' && data.hints && data.hints.sentences) {
        hint = data.hints.sentences[key] || '';
    }
    document.getElementById('adm_h_text').value = hint;
}
function adminSaveHint() {
    const type = document.getElementById('adm_h_type').value;
    const targetEl = document.getElementById('adm_h_target');
    if (!targetEl) { alert('Hedef seçin'); return; }
    const key = targetEl.value;
    const text = document.getElementById('adm_h_text').value.trim();
    if (!type || !key) { alert('Lütfen tip ve hedef seçin'); return; }
    if (!data.hints) data.hints = {sentences:{}, verbs:{}, sections:{}}; 
    if (type === 'section') {
        if (!data.hints.sections) data.hints.sections = {};
        if (text) data.hints.sections[key] = text;
        else delete data.hints.sections[key];
    } else if (type === 'verb') {
        if (!data.hints.verbs) data.hints.verbs = {};
        if (text) data.hints.verbs[key] = text;
        else delete data.hints.verbs[key];
    } else if (type === 'sentence') {
        if (!data.hints.sentences) data.hints.sentences = {};
        if (text) data.hints.sentences[key] = text;
        else delete data.hints.sentences[key];
    }
    if (!text) { alert('İpucu metni boş olduğu için silindi.'); }
    else { alert('İpucu kaydedildi.'); }
    saveContentOverride();
}
function showAdminSentenceForm(area) {
    const t = getMergedTranslations(data.settings.language || 'tr');
    area.innerHTML = `<div class="content-box"><h4>${t.admin.editSentence}</h4>
      <label>${t.labels.group}</label><select id="adm_es_group" class="select-field"></select>
      <label>${t.labels.verb}</label><select id="adm_es_verb" class="select-field"></select>
      <label>${t.labels.section}</label><select id="adm_es_section" class="select-field"></select>
      <label>${t.labels.sentence}</label><select id="adm_es_sentence" class="select-field"></select>
      <label>${t.labels.tr}</label><textarea id="adm_es_tr" class="textarea-field" rows="3"></textarea>
      <label>${t.labels.de}</label><textarea id="adm_es_de" class="textarea-field" rows="3"></textarea>
      <div class="button-group-row">
        <button class="btn btn-primary" onclick="adminSaveEditedSentence()">✅ ${t.buttons.update}</button>
        <button class="btn btn-info" onclick="adminAddNewSentence()">➕ ${t.buttons.add}</button>
        <button class="btn btn-danger" onclick="adminDeleteSentence()">🗑 ${t.buttons.delete}</button>
      </div></div>`;
    fillSelect('adm_es_group', data.groups.map(g => ({ v: g.id, t: g.name })), true);
    document.getElementById('adm_es_group').onchange = admin_es_loadVerbs;
    document.getElementById('adm_es_verb').onchange = admin_es_loadSections;
    document.getElementById('adm_es_section').onchange = admin_es_loadSentences;
    document.getElementById('adm_es_sentence').onchange = admin_es_loadSentenceFields;
    if (data.groups.length > 0) {
        document.getElementById('adm_es_group').selectedIndex = 1;
        admin_es_loadVerbs();
    }
}
function fillSelect(id, items, addEmpty) {
    const s = document.getElementById(id); s.innerHTML = '';
    if (addEmpty) { const o = document.createElement('option'); o.value = ''; o.textContent = 'Seçin...'; s.appendChild(o); }
    items.forEach(it => { const o = document.createElement('option'); o.value = it.v; o.textContent = it.t; s.appendChild(o); });
}
function admin_es_loadVerbs() {
    const gid = document.getElementById('adm_es_group').value;
    fillSelect('adm_es_verb', (data.verbs[gid] || []).map(v => ({ v: v.id, t: (v.verbTR || v.verbDE) })), true);
    admin_es_loadSections();
}
// index.html, admin_es_loadSections fonksiyonunu BUL ve DEĞİŞTİR

function admin_es_loadSections() {
    const verbId = document.getElementById('adm_es_verb').value;
    
    // DÜZELTME: data.sections -> data.topicPool
    const source = data.topicPool || {};

    const items = Object.entries(source).map(([num, name]) => {
        const count = (data.content[`${verbId}_s${num}`] || []).length;
        return { v: num, t: `${num}. ${name} (${count} cümle)` };
    });
    fillSelect('adm_es_section', items, true);
    admin_es_loadSentences();
}
// index.html, renderAllSentencesTable fonksiyonunu BUL ve DEĞİŞTİR

function renderAllSentencesTable(){
    const container = document.getElementById('allSentencesTable');
    const t = getMergedTranslations(data.settings.language || 'tr');
    let html = `<table style="width:100%; border-collapse: collapse;"><thead><tr style="text-align:left; background: #eee;">
    <th style="padding: 6px;">${t.labels.group}</th><th>${t.labels.verb}</th><th>${t.labels.section}</th>
    <th>${t.labels.index}</th><th>${t.labels.tr}</th><th>${t.labels.de}</th></tr></thead><tbody>`;
    let groupMap = {};
    (data.groups || []).forEach(g => {
        (data.verbs[g.id] || []).forEach(v => {
            groupMap[v.id] = { groupName: g.name, verbName: (v.verbTR || v.verbDE) };
        });
    });
    Object.entries(data.content||{}).forEach(([key,arr])=>{
        const m = key.match(/^(.+)_s(\d+)$/);
        if(!m) return;
        const vid = m[1]; const sec = m[2];
        const info = groupMap[vid] || { groupName: '?', verbName: vid };
        
        // DÜZELTME: data.sections -> data.topicPool
        const sectionName = (data.topicPool && data.topicPool[sec]) || sec;

        (arr||[]).forEach((s,i)=>{
        html += `<tr style="border-bottom: 1px solid #eee;"><td style="padding: 4px;">${escapeHtml(info.groupName)}</td><td>${escapeHtml(info.verbName)}</td><td>${escapeHtml(sectionName)}</td>
        <td>${i}</td><td>${escapeHtml(s.tr||'')}</td><td>${escapeHtml(s.de||'')}</td></tr>`;
        });
    });
    html += '</tbody></table>';
    container.innerHTML = html;
}

/* --- YENİLENMİŞ TOPLU CÜMLE DÜZENLEME (BULK EDIT) --- */

function fillBulkEditSelectors() {
    const groupSelect = document.getElementById('bulk_edit_group');
    if (!groupSelect) return;
    fillSelect('bulk_edit_group', data.groups.map(g => ({ v: g.id, t: g.name })), true);
    groupSelect.onchange = bulkEditLoadVerbs;
    bulkEditLoadVerbs();
}

function bulkEditLoadVerbs() {
    const gid = document.getElementById('bulk_edit_group').value;
    const verbSelect = document.getElementById('bulk_edit_verb');
    if (!verbSelect) return;
    const verbs = (data.verbs[gid] || []).map(v => ({ v: v.id, t: `${v.verbTR || v.verbDE} (${v.id})` }));
    fillSelect('bulk_edit_verb', verbs, true);
    verbSelect.onchange = bulkEditLoadSentences;
    bulkEditLoadSentences(); 
}

function bulkEditLoadSentences() {
    const verbId = document.getElementById('bulk_edit_verb').value;
    const container = document.getElementById('bulkEditTableContainer');
    const newSentenceForm = document.getElementById('bulkAddNewSentence');

    if (!verbId) {
        container.innerHTML = `<p style="text-align:center; color:#718096;">Lütfen yukarıdan Grup ve Fiil seçiniz.</p>`;
        newSentenceForm.style.display = 'none';
        return;
    }

    newSentenceForm.style.display = 'block';
    let allSentences = [];

    Object.keys(data.topicPool || {}).forEach(secNum => {
        const key = `${verbId}_s${secNum}`;
        const sentences = data.content[key] || [];
        sentences.forEach((s, i) => {
            allSentences.push({ ...s, section: secNum, originalIndex: i });
        });
    });

    if (allSentences.length === 0) {
        container.innerHTML = `<div class="content-box"><p>Bu fiil için henüz hiç cümle eklenmemiş.</p></div>`;
        return;
    }

    let html = `<table id="bulkEditTable" style="width:100%; border-collapse: collapse;">
        <thead><tr style="text-align:left; background: #eee; color: #0f1724;">
            <th style="padding: 6px; width: 80px;">Konu ID</th>
            <th style="width: 30%;">TR Cümle</th>
            <th style="width: 30%;">DE Cümle</th>
            <th style="width: 25%;">İpucu</th>
            <th style="width: 5%;">Eylem</th>
        </tr></thead><tbody>`;

    allSentences.forEach((s) => {
        const srsKey = getSrsKey(verbId, s.section, s.originalIndex);
        const currentHint = (data.hints?.sentences?.[srsKey]) || '';
        html += `<tr data-section="${s.section}" data-original-index="${s.originalIndex}" style="border-bottom: 1px solid #eee;">
            <td><input type="number" class="input-field bulk-section" value="${s.section}" style="width: 70px;"></td>
            <td><textarea rows="1" class="textarea-field bulk-tr">${escapeHtml(s.tr || '')}</textarea></td>
            <td><textarea rows="1" class="textarea-field bulk-de">${escapeHtml(s.de || '')}</textarea></td>
            <td><textarea rows="1" class="textarea-field bulk-hint">${escapeHtml(currentHint)}</textarea></td>
            <td><button class="btn btn-danger btn-small" onclick="this.closest('tr').remove()">🗑</button></td>
        </tr>`;
    });

    html += '</tbody></table>';
    html += `<div style="margin-top:15px; text-align:right;">
        <button class="btn btn-primary" onclick="adminSaveBulkEdit()">💾 TÜM DEĞİŞİKLİKLERİ KAYDET</button>
    </div>`;
    container.innerHTML = html;
}

function adminAddNewSentenceToTable() {
    const tableBody = document.querySelector('#bulkEditTable tbody');
    if (!tableBody) {
        alert("Önce bir fiil seçerek tabloyu oluşturun.");
        return;
    }
    const sectionId = document.getElementById('bulk_new_section_id').value;
    const tr = document.getElementById('bulk_new_tr').value;
    const de = document.getElementById('bulk_new_de').value;

    if (!sectionId || !tr || !de) {
        alert("Yeni cümle için Konu ID, TR ve DE Cümle alanları doldurulmalıdır.");
        return;
    }

    const newRow = document.createElement('tr');
    newRow.dataset.section = sectionId;
    newRow.dataset.originalIndex = -1; // Yeni olduğunu belirtmek için -1
    newRow.style.backgroundColor = '#e6fffa';
    newRow.innerHTML = `
        <td><input type="number" class="input-field bulk-section" value="${sectionId}" style="width: 70px;"></td>
        <td><textarea rows="1" class="textarea-field bulk-tr">${escapeHtml(tr)}</textarea></td>
        <td><textarea rows="1" class="textarea-field bulk-de">${escapeHtml(de)}</textarea></td>
        <td><textarea rows="1" class="textarea-field bulk-hint"></textarea></td>
        <td><button class="btn btn-danger btn-small" onclick="this.closest('tr').remove()">🗑</button></td>
    `;
    tableBody.appendChild(newRow);

    // Inputları temizle
    document.getElementById('bulk_new_tr').value = '';
    document.getElementById('bulk_new_de').value = '';
}

function adminSaveBulkEdit() {
    const verbId = document.getElementById('bulk_edit_verb').value;
    if (!verbId) { alert("Fiil seçilmedi!"); return; }

    let newContent = {};
    let newHints = {};

    document.querySelectorAll('#bulkEditTable tbody tr').forEach(row => {
        const section = row.querySelector('.bulk-section').value;
        const tr = row.querySelector('.bulk-tr').value.trim();
        const de = row.querySelector('.bulk-de').value.trim();
        const hint = row.querySelector('.bulk-hint').value.trim();

        if (!section || (!tr && !de)) return;

        const contentKey = `${verbId}_s${section}`;
        if (!newContent[contentKey]) newContent[contentKey] = [];
        
        const newIndex = newContent[contentKey].length;
        newContent[contentKey].push({ tr, de });

        if (hint) {
            const hintKey = getSrsKey(verbId, section, newIndex);
            if (!newHints) newHints = {};
            newHints[hintKey] = hint;
        }
    });

    // Önce bu fiile ait tüm eski içeriği ve ipuçlarını temizle
    Object.keys(data.content).forEach(key => {
        if (key.startsWith(`${verbId}_s`)) {
            delete data.content[key];
        }
    });
    if (data.hints?.sentences) {
        Object.keys(data.hints.sentences).forEach(key => {
            if (key.startsWith(`${verbId}_s`)) {
                delete data.hints.sentences[key];
            }
        });
    }

    // Yeni içeriği ve ipuçlarını ekle
    Object.assign(data.content, newContent);
    if (data.hints?.sentences) {
        Object.assign(data.hints.sentences, newHints);
    } else if (Object.keys(newHints).length > 0) {
        if (!data.hints) data.hints = {};
        data.hints.sentences = newHints;
    }

    saveContentOverride();
    alert('✅ Değişiklikler kaydedildi!');
    bulkEditLoadSections();
}

function exportSentencesCsv(){
  console.log("TSV Dışa Aktarma Başlatılıyor...");
  const t = getMergedTranslations(data.settings.language || 'tr');
  let rows = [['GrupID','FiilID','BölümNumarası','TR','DE','CümleIpucu']];
  const verbToGroupMap = new Map();
  Object.entries(data.verbs).forEach(([gid, verbList]) => {
      (verbList || []).forEach(v => {
          verbToGroupMap.set(v.id, gid);
      });
  });
  Object.entries(data.content||{}).forEach(([key,arr])=>{
    const m = key.match(/^(.+)_s(\d+)$/);
    if(!m) return;
    const vid = m[1];
    const sec = m[2];
    const gid = verbToGroupMap.get(vid) || '?';
    (arr||[]).forEach((s,i)=>{
      const hintKey = getSrsKey(vid, sec, i); 
      const hint = (data.hints && data.hints.sentences && data.hints.sentences[hintKey]) || '';
      rows.push([gid, vid, sec, s.tr||'', s.de||'', hint]);
    });
  });
  console.log(`${rows.length - 1} cümle bulundu. TSV oluşturuluyor...`);
  const tsv = rows.map(r => r.join('\t')).join('\n');
  const blob = new Blob([tsv],{type:'text/tab-separated-values;charset=utf-8;'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'sentences_backup.tsv';
  a.click();
  URL.revokeObjectURL(url);
  alert('TSV (Excel) formatında yedek indirildi. Bu dosyayı kopyalayıp Toplu Yüklemeye yapıştırabilirsiniz.');
}

// index.html, JS section

// KONUYA YILDIZ DEĞERLENDİRMESİ ATAR
function setTopicStarRating(topicId, rating) {
    // rating: 0 (değerlendirilmedi) ile 3 (çok önemli) arasında bir sayı
    if (!data.settings.topicStars) {
        data.settings.topicStars = {};
    }
    
    const key = `${data.settings.currentClass || 'A1'}_${topicId}`;
    
    if (rating === 0) {
        delete data.settings.topicStars[key];
    } else {
        data.settings.topicStars[key] = rating;
    }
    
    saveSettings(); // Ayarları LocalStorage'a kaydet
    
    // Eğer şu an konu menüsündeysek, listeyi hemen güncelle
    if (state.currentView === 'sectionMenu') {
        selectVerb(state.verb); 
    }
}

// Konunun mevcut yıldızını çeker
function getTopicStarRating(topicId) {
    if (!data.settings.topicStars) return 0;
    const key = `${data.settings.currentClass || 'A1'}_${topicId}`;
    return data.settings.topicStars[key] || 0;
}
// Yeni Boş Cümle Satırı Ekleme (Basitleştirilmiş)
function adminAddNewSentencePrompt() {
    const verbId = document.getElementById('bulk_edit_verb').value;
    const section = document.getElementById('bulk_edit_section').value;
    const container = document.getElementById('bulkEditTableContainer');

    if (!verbId || !section) {
         alert('Lütfen önce Grup, Fiil ve Konu seçin.');
         return;
    }
    
    // Tabloya yeni boş satır ekle
    const tableBody = document.querySelector('#bulkEditTable tbody');
    if (!tableBody) {
        // Eğer tablo yoksa, boş bir tablo yapısı oluştur
         container.innerHTML = 'Hata: Tablo yüklenmedi.';
         return; 
    }
    
    // Yeni index (mevcut satır sayısı)
    const newIndex = tableBody.children.length; 
    
    const newRowHtml = `<tr data-index="${newIndex}" data-key="new_${Math.random().toString(36).substring(2, 9)}" style="border-bottom: 1px solid #eee; background-color: #f7fff7;">
        <td style="padding: 6px;">YENİ</td>
        <td><textarea rows="2" class="textarea-field bulk-tr" style="min-height: 50px;"></textarea></td>
        <td><textarea rows="2" class="textarea-field bulk-de" style="min-height: 50px;"></textarea></td>
        <td><textarea rows="2" class="textarea-field bulk-hint" style="min-height: 50px;"></textarea></td>
        <td><button class="btn btn-danger btn-small" onclick="this.closest('tr').remove()">İptal</button></td>
    </tr>`;
    
    tableBody.insertAdjacentHTML('beforeend', newRowHtml);
    alert('Yeni bir satır eklendi. Kaydetmek için "Tüm Değişiklikleri Kaydet"e basınız.');
}
/* ---------- Uygulama Güncelleme ---------- */
function forceUpdateApp() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.getRegistrations().then(registrations => {
            const unregisterPromises = registrations.map(reg => reg.unregister());
            const deleteCachePromises = window.caches ? caches.keys().then(keys => {
                return Promise.all(keys.map(key => caches.delete(key)));
            }) : Promise.resolve();
            Promise.all([].concat(unregisterPromises, [deleteCachePromises]))
                .then(() => {
                    alert('✅ Güncelleme tamamlandı. Uygulama yeniden yüklenecek.');
                    window.location.reload(true);
                });
        }).catch(err => {
            alert('Güncelleme hatası: ' + err.message);
            window.location.reload(true);
        });
    } else {
        window.location.reload(true);
    }
}
// index.html, JS section (Bu fonksiyonları EKLEYİN veya güncelleyin)

// KARIŞIK MOD BUTONU İÇİN YENİ GİRİŞ NOKTASI
function openMixedModeSettings() {
    loadMixedModeSettings(); // Ayarlar ekranını yükle
    //updateMixedModeCount(); // Ana menü sayacını günceller (opsiyonel)
    showView('mixedModeSettingsView');
}

// KARIŞIK MOD ÇALIŞMASINI BAŞLATIR (YENİ BUTON İŞLEVİ)
function startMixedModeStudy() {
    // startMixedMode() içinde tanımladığımız Karışık Mod mantığı buraya gelir
    // Verileri topla ve Karışık Mod çalışmasını başlat
    
    const mixedKeys = getMixedModeContentKeys();

    if (mixedKeys.length === 0) {
        alert("Karışık Mod çalışması başlatılamadı. Lütfen en az bir konuya yıldız atayın.");
        return;
    }
    
    // 1. State'i Karışık Mod için ayarla
    state.isMixedMode = true;
    state.mixedStudyContentKeys = mixedKeys; 
    state.mixedStudyIndex = 0; 
    
    // 2. Başlık ve Akış için gerekli değişkenleri ayarla
    state.currentClass = 'MIXED'; // Başlıkta 'K' göstermek için bir işaret
    state.group = 'MIXED';
    state.verb = 'MIXED';
    state.section = 'MIXED';
    
    // 3. Çalışmayı Başlat
    loadMixedModeStudyCard(); 
    showView('studyView');
}
/* ---------- Utils ---------- */
// Yeni: Büyük/küçük harf ve noktalama işaretlerinden arındırır (YAMA 1)
function normalizeString(str) {
    if (!str) return '';
    // Noktalama işaretlerini, boşlukları ve harf büyüklüğünü temizler
    return String(str)
        .toLowerCase()
        .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
        .replace(/\s{2,}/g, " ")
        .trim();
}

// Orijinal escapeHtml fonksiyonunuzun hemen üstüne/altına eklenebilir.
function escapeHtml(t){ if(t===undefined||t===null) return ''; return String(t).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m])); }
// ... (Diğer Utils fonksiyonları)
// YENİ: Markdown İşleyici Fonksiyonu (Kılavuz/İpucu için CRITICAL FIX)
function processGuideMarkdown(text) {
    if (!text) return '';
    let processedText = text;
    
    // 1. HTML Güvenliği (Önce kaçış karakterlerini uygula)
    processedText = escapeHtml(processedText);

    // 2. **Bold** -> <b>bold</b>
    processedText = processedText.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');
    processedText = processedText.replace(/__(.*?)__/g, '<b>$1</b>');

    // 3. Liste İşleyici (* veya - ile başlayan satırlar)
    let listRegex = /^\s*(\*|-)\s+(.*)/gm;
    let listOpen = false;
    processedText = processedText.split('\n').map(line => {
        if (listRegex.test(line)) {
            let item = line.replace(listRegex, '<li>$2</li>');
            if (!listOpen) {
                listOpen = true;
                return '<ul>' + item;
            }
            return item;
        } else {
            if (listOpen) {
                listOpen = false;
                return '</ul>' + line; 
            }
            return line;
        }
    }).join('\n');
    
    if (listOpen) {
        processedText += '</ul>';
    }

    // 4. İki boş satırı paragraflara (<p>) çevir
    processedText = processedText.replace(/\n\n/g, '</p><p>');
    // Geri kalan tek satır atlamalarını <br> yap
    processedText = processedText.replace(/\n/g, '<br>');
    
    // 5. Sonucu <p> etiketine sar (HTML öğesi içermiyorsa)
    if (processedText.trim().length > 0 && processedText.indexOf('<p>') === -1 && processedText.indexOf('<ul') === -1 && processedText.indexOf('<hr') === -1 && processedText.indexOf('<h') === -1) {
        processedText = '<p>' + processedText + '</p>';
    }
    
    // 6. Temizlik
    processedText = processedText.replace(/<br><\/p>/g, '</p>').replace(/<p><br>/g, '<p>');

    return processedText;
}

function escapeHtml(t){ if(t===undefined||t===null) return ''; return String(t).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m])); }
function isObject(item) { return (item && typeof item === 'object' && !Array.isArray(item)); }
function deepMerge(target, source) {
    let output = Object.assign({}, target);
    if (isObject(target) && isObject(source)) {
        Object.keys(source).forEach(key => {
            if (isObject(source[key])) {
                if (!(key in target)) Object.assign(output, { [key]: source[key] });
                else output[key] = deepMerge(target[key], source[key]);
            } else {
                Object.assign(output, { [key]: source[key] });
            }
        });
    }
    return output;
}
// index.html, function loadBulkEditTable() fonksiyonunu BUL ve DEĞİŞTİR

function loadBulkEditTable() {
    const verbId = document.getElementById('bulk_edit_verb').value;
    const section = document.getElementById('bulk_edit_section').value;
    const container = document.getElementById('bulkEditTableContainer');
    const t = getMergedTranslations(data.settings.language || 'tr');
    
    if (!verbId || !section) {
        container.innerHTML = `<p class="small-muted">Lütfen Fiil ve Konu seçin.</p>`;
        return;
    }

    let sectionsToLoad = [];
    if (section === 'all') {
        sectionsToLoad = Object.keys(data.topicPool || {}); 
    } else {
        sectionsToLoad.push(section);
    }

    let allSentences = [];
    let overallCount = 0;

    // Cümleleri toplama
    sectionsToLoad.forEach(secNum => {
        const key = `${verbId}_s${secNum}`;
        const sentences = data.content[key] || [];
        
        sentences.forEach((s, i) => {
            allSentences.push({
                tr: s.tr,
                de: s.de,
                srsKey: getSrsKey(verbId, secNum, i), // İpucu kaydı için gerekli anahtar
                section: secNum, 
                originalIndex: i 
            });
        });
        overallCount += sentences.length;
    });

    if (overallCount === 0) {
        container.innerHTML = `<div class="content-box"><p>${t.messages.noSentences}</p></div>`;
        return;
    }
    
    // Başlık
    const sectionNameDisplay = section === 'all' ? 'TÜM BÖLÜMLER' : (data.topicPool[section] || 'Bilinmeyen Bölüm');

    let html = `<p><b>Fiil:</b> ${verbId} | <b>Bölüm:</b> ${sectionNameDisplay} (${overallCount} cümle)</p>
        <table id="bulkEditTable" class="admin-table" style="width:100%; border-collapse: collapse; margin-top: 10px;">
        <thead><tr style="text-align:left; background: #eee; color: #0f1724;">
            <th style="padding: 6px; width: 30px;">Bölüm.#</th>
            <th style="width: 25%;">TR Cümle</th>
            <th style="width: 25%;">DE Cümle</th>
            <th style="width: 30%;">İpucu</th>
            <th style="width: 10%;">Eylem</th>
        </tr></thead><tbody>`;

    allSentences.forEach((s) => {
        const currentHint = (data.hints && data.hints.sentences && data.hints.sentences[s.srsKey]) || '';
        
        // KRİTİK EKLENTİ: İpucu Kutusu (bulk-hint)
        html += `<tr data-section="${s.section}" data-original-index="${s.originalIndex}" data-srs-key="${s.srsKey}" style="border-bottom: 1px solid #eee;">
            <td style="padding: 6px; font-size: 0.9em;">${s.section}.${s.originalIndex}</td>
            <td><textarea rows="2" class="textarea-field bulk-tr" style="min-height: 50px;">${escapeHtml(s.tr || '')}</textarea></td>
            <td><textarea rows="2" class="textarea-field bulk-de" style="min-height: 50px;">${escapeHtml(s.de || '')}</textarea></td>
            <td><textarea rows="2" class="textarea-field bulk-hint" style="min-height: 50px;">${escapeHtml(currentHint)}</textarea></td>
            <td><button class="btn btn-danger btn-small" onclick="adminDeleteSentenceFromBulk('${verbId}_s${s.section}', ${s.originalIndex}, this)">🗑 Sil</button></td>
        </tr>`;
    });

    html += '</tbody></table>';
    
    // KRİTİK EKLENTİ: TÜM DEĞİŞİKLİKLERİ KAYDET butonu
    html += `<div style="margin-top:15px; text-align:right;">
        <button class="btn btn-primary" onclick="adminSaveBulkEdit()">💾 TÜM DEĞİŞİKLİKLERİ KAYDET</button>
    </div>`;

    container.innerHTML = html;
}


// index.html -> Bu fonksiyonu eskisinin yerine yapıştırın

// YARDIMCI: Bekleme Fonksiyonu
const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function adminStartBatchAnalysis() {
    const verbId = document.getElementById('bulk_edit_verb').value;
    const section = document.getElementById('bulk_edit_section').value;
    const table = document.getElementById('bulkEditTable');

    if (!verbId || !section || !table) {
        alert('Lütfen önce listeyi yükleyin.');
        return;
    }

    // Tablodaki tüm satırları al
    const rows = Array.from(table.querySelectorAll('tbody tr'));
    const total = rows.length;

    if (!confirm(`${total} cümle analiz edilecek. Bu işlem sırasında sonuçlar ekrana teker teker yazılacak.\n\nDurdurmak için sayfayı yenileyebilirsiniz.\n\nBaşlasın mı?`)) return;

    // Her satır için tek tek işlem yap
    for (let i = 0; i < total; i++) {
        const row = rows[i];
        
        // O anki satırı görsel olarak vurgula (Sarı yap)
        row.style.backgroundColor = '#fffbeb'; 
        row.scrollIntoView({ behavior: 'smooth', block: 'center' });

        // Satırdaki verileri al
        const tr = row.querySelector('.bulk-tr').value;
        const de = row.querySelector('.bulk-de').value;
        const sectionNum = row.dataset.section;
        const originalIndex = parseInt(row.dataset.originalIndex);

        // Zaten ipucu varsa ve boş değilse atlayabiliriz (İsteğe bağlı, şimdilik hepsini yapıyoruz)
        
        try {
            // Sunucuya TEK CÜMLE gönderiyoruz (Böylece sunucu bekleme yapmaz, hemen cevap verir)
            const response = await fetch('http://localhost:3000/api/batch-analyze', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    verbId: verbId,
                    section: sectionNum,
                    sentences: [{ 
                        tr, 
                        de, 
                        section: sectionNum, 
                        originalIndex: originalIndex 
                    }]
                })
            });

            const data = await response.json();

            if (data.success && data.results && data.results.length > 0) {
                const result = data.results[0];
                
                // 1. Kutucukları Doldur
                const hintBox = row.querySelector('.bulk-hint');
                const deBox = row.querySelector('.bulk-de');
                
                // Animasyonlu bir efektle yazalım
                hintBox.style.borderColor = '#48bb78'; // Yeşil çerçeve
                hintBox.value = result.hint_text || '';
                
                // Eğer YZ Almanca cümleyi düzelttiyse onu da güncelle
                if (result.corrected_de && result.corrected_de !== de) {
                    deBox.value = result.corrected_de;
                    deBox.style.color = '#2f855a'; // Değiştiğini belli et
                }
            } else {
                console.error("Sunucu hatası:", data);
                row.querySelector('.bulk-hint').placeholder = "Hata oluştu...";
            }

        } catch (err) {
            console.error("Bağlantı hatası:", err);
            row.querySelector('.bulk-hint').value = "Sunucuya bağlanılamadı!";
        }

        // İşlem biten satırın rengini normale döndür veya yeşil yap
        row.style.backgroundColor = '#f0fff4'; 

        // --- 10 SANİYE BEKLEME ---
        // Beklemeyi BURADA (Tarayıcıda) yapıyoruz. Böylece her işlemi gözünüzle görürsünüz.
        // Son cümle değilse bekle
        if (i < total - 1) {
            const btn = document.querySelector('button[onclick="adminStartBatchAnalysis()"]');
            if(btn) btn.textContent = `⏳ Bekleniyor... (${i+1}/${total} Tamamlandı)`;
            
            await wait(10000); // 10 Saniye bekle
        }
    }

    alert("✅ Tüm cümlelerin analizi tamamlandı!");
    const btn = document.querySelector('button[onclick="adminStartBatchAnalysis()"]');
    if(btn) btn.textContent = "🧠 YZ Toplu Analiz & İpucu Üret";
}

// index.html, JS section (loadMixedModeSettings fonksiyonunu EKLEYİN)

function loadMixedModeSettings(filterRating = 0) {
    const container = document.getElementById('mixedModeTopicList');
    container.innerHTML = '';
    
    // Filtreleri ayarla
    state.starFilter = filterRating; 
    let topicsInView = 0;

    // Tüm sınıf ve konuları bir araya toplar (A1'den C1'e 50 konu)
    const allTopics = {};
    data.classes.forEach(classObj => {
        const classId = classObj.id;
        const topics = data.topics[classId];
        
        if (topics) {
            Object.keys(topics).forEach(topicId => {
                // Anahtarı benzersiz yapalım: "A1_1", "A2_1", vs.
                const uniqueKey = `${classId}_${topicId}`;
                // Eğer konu zaten eklenmemişse (yani birden fazla sınıfta değilse)
                if (!allTopics[uniqueKey]) {
                    allTopics[uniqueKey] = {
                        id: topicId,
                        name: topics[topicId],
                        class: classId
                    };
                }
            });
        }
    });

    // 50 Konuyu Düğme Olarak Listele
    Object.values(allTopics).forEach(topic => {
        const rating = getTopicStarRating(topic.id); // Yıldız derecesini çek
        
        // Filtreleme kontrolü
        if (filterRating > 0 && rating !== filterRating) {
            return;
        }
        
        topicsInView++;
        
        const b = document.createElement('button');
        
        // 1. Yıldız Butonlarını Oluştur
        let starButtonsHtml = '<div class="star-rating-buttons">';
        for (let j = 1; j <= 3; j++) {
            const isActive = j <= rating ? 'star-active' : '';
            const newRating = (rating === j) ? 0 : j; 
            // setTopicStarRating fonksiyonunu çağırır
            starButtonsHtml += `<button class="btn btn-small ${isActive}" onclick="event.stopPropagation(); setTopicStarRating('${topic.id}', ${newRating}); loadMixedModeSettings(${filterRating})">⭐</button>`;
        }
        starButtonsHtml += '</div>';

        // Buton Metni: Konu Adı + Sınıf + Yıldız Butonları
        b.innerHTML = `
            <strong>${topic.class} - ${topic.name}</strong>
            ${starButtonsHtml}
        `;
        
        b.className = 'btn btn-secondary'; // Sadece ayarlama yapıldığı için hepsi gri (secondary) olabilir
        b.disabled = true; // Sadece yıldız butonlarına tıklanmalı
        container.appendChild(b);
    });

    // Filtre butonlarını aktif etme ve sayıları güncelleme (Burada updateFilterCounts mantığını kullanın)
    // Bu mantık, hangi butonun aktif olduğunu ve kaç konu olduğunu gösterecektir.
    
    document.querySelector('#mixedModeSettingsView h4').textContent = `Filtrele ve Çalışmaya Başla: (${topicsInView} Konu Görünüyor)`;
    
    // Tüm butonları pasif yap
    document.querySelectorAll('#starRatingFilterArea .btn-star-filter').forEach(btn => btn.classList.remove('active'));
    // Seçili olanı aktif yap
    document.querySelector(`.btn-star-filter:nth-child(${filterRating + 1})`).classList.add('active');

    showView('mixedModeSettingsView');
}


// index.html, JS section (Yeni Fonksiyonlar)

// KARIŞIK MOD ÇALIŞMASINI BAŞLATIR
function startMixedMode() {
    const mixedKeys = getMixedModeContentKeys();

    if (mixedKeys.length === 0) {
        alert("Henüz yıldızladığınız (önem derecesi verdiğiniz) bir konu bulunmamaktadır. Lütfen 'Konu Seçimi' menülerinde konularınızı yıldızlayın.");
        return;
    }
    
    // state'i Karışık Mod için ayarla
    state.isMixedMode = true;
    state.mixedStudyContentKeys = mixedKeys; // Tüm içerik anahtarları (Örn: 'gehen_s1', 'sehen_s5', vs.)
    state.mixedStudyIndex = 0; // Karışık modda hangi anahtar sırasındayız
    state.sessionTotal = mixedKeys.length; // YENİ: Karışık mod için toplam
    
    // Gerekli diğer state değişkenlerini sıfırla/MIXED olarak ayarla (başlıklar için)
    state.currentClass = 'MIXED'; 
    state.group = 'MIXED';
    state.verb = 'MIXED';
    state.section = 'MIXED';

    // İlk konuyu yükle ve çalışma ekranına geç
    loadMixedModeStudyCard(); 
    showView('studyView');
}

// Karışık Mod için o anki fiil/konu setini yükler
function loadMixedModeStudyCard() {
    const key = state.mixedStudyContentKeys[state.mixedStudyIndex];
    if (!key) {
        // Tüm Karışık Mod konuları bitti
        state.isMixedMode = false;
        showView('mainMenu'); 
        alert("Karışık Mod çalışması tamamlandı!");
        return;
    }

    // key formatı: 'verbId_sTopicId'
    const [verbId, topicPart] = key.split('_s');
    const topicId = parseInt(topicPart.replace('s', '')); 

    // Orijinal sınıf bilgisini bulmak için (Başlıkta göstermek için)
    let originalClassId = 'Bilinmiyor';
    for (const classObj of data.classes) {
        if (data.topics[classObj.id] && data.topics[classObj.id][topicId]) {
            originalClassId = classObj.id;
            break;
        }
    }
    
    // studySections'ı o anki mixed key'in içeriğiyle doldur
    state.studySections = data.content[key] || [];
    state.currentCardIndex = 0; 
    
    // Başlık bilgisini güncelle (Örn: ⭐ KARIŞIK MOD: A1 - ALGI & İLETİŞİM)
    const topicName = data.topics[originalClassId] ? data.topics[originalClassId][topicId] : `Konu ${topicId}`;
    document.getElementById('studyHeader').textContent = `⭐ KARIŞIK MOD: ${originalClassId} - ${topicName}`;

    // İlk kartı yükle
    updateStudyCard();
}
/* ---------- Başlatma (Init v3.7) ---------- */

/* --- GÜNCELLENMİŞ NAVİGASYON SİSTEMİ (Yerinde Güncelleme) --- */

// 1. Splash Ekranını Yönetir (DOĞRU ZAMANLAMA)
function handleSplashScreen() {
    const splash = document.getElementById('splashScreen');
    if(!splash) { checkFirstLogin(); return; } 

    // 1.5 saniye sonra solmaya başlar
    setTimeout(() => {
        splash.classList.add('splash-hidden'); 
        
        // Solma bittikten sonra (1000ms sonra) ana akışı başlat
        setTimeout(() => { 
            splash.style.display = 'none'; 
            checkFirstLogin(); // <-- checkFirstLogin SADECE bu noktada çağrılmalı
        }, 1000); 

    }, 1500); 
}

// 2. İlk Giriş Kontrolü (BUTON GÖRÜNÜRLÜĞÜ VE AKIŞ GARANTİSİ)
function checkFirstLogin() {
    // 1. openClassSelection() her zaman çağrılır. Bu, welcomeView ekranını açar ve tüm butonları çizer.
    openClassSelection(); 
    
    // 2. Eğer bir sınıf zaten seçiliyse (Geri Dönen Kullanıcı)
    if (data.settings.currentClass) {
        // Zaten çizilen welcomeView ekranını kapatıp Ana Menüye geçiyoruz.
        updateClassNavButton();
        showView('mainMenu'); 
    }
    // Eğer sınıf seçili değilse, welcomeView açık kalır ve kullanıcı seçim yapar.
}
// 3. Sınıf Seçim Ekranını Açar (NEREDE OLDUĞUMUZU KAYDEDER)
// index.html, yaklaşık 1860. satırdaki openClassSelection fonksiyonunu bulun ve değiştirin.
function openClassSelection() {
    const container = document.getElementById('classSelectionContainer');
    if(!container) return;

    // Eğer şu an 'welcomeView' değilsek, mevcut ekranı hafızaya al
    if (state.currentView !== 'welcomeView') {
        state.returnToView = state.currentView;
    }
    
    container.innerHTML = '';
    
    data.classes.forEach(c => {
        const btn = document.createElement('button');
        const isSelected = data.settings.currentClass === c.id;
        
        let btnClass = isSelected ? 'btn btn-primary' : 'btn btn-secondary';
        let bgStyle = isSelected ? '' : 'background: rgba(255,255,255,0.9); color: #333;'; 
        let borderStyle = isSelected ? 'border: 3px solid #fff; box-shadow: 0 0 20px rgba(255,255,255,0.5);' : 'border: none;';
        
        // KRİTİK DÜZELTME: MIXED butonunu daha belirgin yap (Sarı renk kullanıyoruz)
        if (c.id === 'MIXED') {
            btnClass = isSelected ? 'btn btn-warning' : 'btn btn-warning';
            bgStyle = isSelected ? '' : 'background: #fbd38d; color: #1e293b;';
            borderStyle = isSelected ? 'border: 3px solid #fff;' : 'border: 1px solid #d69e2e;';
        }
        
        btn.className = btnClass;
        btn.style.cssText = `flex-direction: column; padding: 25px; min-width: 140px; ${bgStyle} ${borderStyle}`;
        btn.innerHTML = `<span style="font-size: 2rem; font-weight:800;">${c.id}</span>
                         <span style="font-size: 1rem; opacity: 0.9;">${c.name}</span>`;
        
        btn.onclick = () => selectUserClass(c.id);
        container.appendChild(btn);
    });
    
    showView('welcomeView');
}

// 4. Kullanıcı Sınıf Seçtiğinde (KALDIĞI YERİ GÜNCELLER)
function selectUserClass(classId) {
    // Ayarı kaydet
    data.settings.currentClass = classId;
    saveSettings();
    updateClassNavButton();
    
    // Nereye döneceğiz? (Kayıtlı bir yer yoksa Ana Menüye)
    const targetView = state.returnToView || 'mainMenu';
    
    // --- KRİTİK NOKTA: DÖNÜLEN EKRANI YENİ SINIFA GÖRE YENİLE ---
    
    if (targetView === 'sectionMenu' && state.verb) {
        // Eğer "Konu Seç" ekranındaysak, listeyi hemen yeni sınıfa göre tekrar çiz
        selectVerb(state.verb); 
    } 
    else if (targetView === 'verbMenu' && state.group) {
        // Eğer "Fiil Seç" ekranındaysak
        selectGroup(state.group);
    }
    else if (targetView === 'groupMenu') {
        // Eğer "Grup Seç" ekranındaysak
        loadAndShowGroupMenu();
    }
    
    // Şimdi o ekrana git (Zaten güncellendi)
    showView(targetView);
    
    // Hafızayı temizle
    state.returnToView = null;
}

// 5. Buton Metnini Güncelle
function updateClassNavButton() {
    const btn = document.getElementById('classNavBtn');
    if(btn) {
        btn.textContent = data.settings.currentClass || '?';
    }
}
// index.html, JS section (Yeni Fonksiyonlar)

// YILDIZLI KONULARIN TÜM İÇERİK ANAHTARLARINI TOPLAR
function getMixedModeContentKeys() {
    const mixedKeys = [];
    
    // data.classes dizisindeki tüm sınıfları dolaş (A1, A2, B1...)
    data.classes.forEach(classObj => {
        const classId = classObj.id;
        const topics = data.topics[classId];

        if (!topics) return;

        // O sınıftaki tüm konuları dolaş
        Object.keys(topics).forEach(topicId => {
            // Konunun yıldız derecesini kontrol et (0'dan büyükse yıldızlıdır)
            const rating = getTopicStarRating(topicId); 
            
            if (rating > 0) {
                const topicKeyPrefix = `_s${topicId}`;
                
                // data.content içindeki tüm anahtarları kontrol ederek bu konuya ait tüm fiilleri bul
                Object.keys(data.content).forEach(contentKey => {
                    // contentKey formatı: verbId_sTopicId
                    if (contentKey.endsWith(topicKeyPrefix)) {
                        // Anahtarın içeriği doluysa listeye ekle
                        if (data.content[contentKey] && data.content[contentKey].length > 0) {
                             mixedKeys.push(contentKey);
                        }
                    }
                });
            }
        });
    });
    
    // Tekrarları önle ve listeyi döndür
    return Array.from(new Set(mixedKeys));
}
// index.html, JS section (Yeni Fonksiyon)

// KARIŞIK MOD butonu üzerindeki yıldızlı konu sayısını günceller
function updateMixedModeCount() {
    const mixedKeys = getMixedModeContentKeys();
    const countElement = document.getElementById('mixedModeCount');
    if (countElement) {
        countElement.textContent = `${mixedKeys.length} Farklı Konu Seçili`;
        // Eğer hiç konu seçili değilse butonu devre dışı bırak
        const mixedBtn = document.getElementById('mixedModeBtn');
        if (mixedBtn) {
            mixedBtn.disabled = mixedKeys.length === 0;
            mixedBtn.style.opacity = mixedKeys.length === 0 ? "0.6" : "1";
        }
    }
}

// Yıldız Durumunu Değiştirir ve Kaydeder
function toggleMixedStar(topicId) {
    if (data.settings.starredTopics[topicId]) {
        delete data.settings.starredTopics[topicId];
    } else {
        data.settings.starredTopics[topicId] = true;
    }
    saveSettings(); // data.settings'i LocalStorage'a yazar
    renderMixedModeList(); // Listeyi yenile
}


function toggleMixedStar(topicId, currentFilter = 'all') {
    // Mevcut rating'i al (Yoksa 0 varsay)
    let currentRating = data.settings.starredTopics[topicId] || 0;

    // Döngü Mantığı: 0 -> 1 -> 2 -> 3 -> 0
    if (currentRating < 3) {
        currentRating++;
        data.settings.starredTopics[topicId] = currentRating;
    } else {
        // 3'ten sonra sıfırla (listedden sil)
        delete data.settings.starredTopics[topicId]; 
    }
    
    // Verileri kaydet ve listeyi yenile
    saveSettings(); 
    saveContentOverride(); 
    renderMixedModeList(currentFilter); 
}
/**
 * Bu fonksiyon, karışık mod ayar ekranı açılırken çağrılmalıdır.
 * (Sınıf seçimi altındaki butondan çağrılacaktır)
 */


/**
 * Ana Menü'de Karışık Mod seçiliyken, o anki yıldızlı konu sayısını hesaplar
 */
function updateMixedModeCount() {
    // Bu fonksiyon sadece MainMenu'de gösterilen sayıyı günceller
    const count = data.settings.starredTopics ? Object.keys(data.settings.starredTopics).length : 0;
    const btn = document.getElementById('btnMixed'); 
    if(btn) {
        btn.innerHTML = `⭐<small>Karışık Mod (${count})</small>`;
    }
}
// --- KARIŞIK MOD FONKSİYONLARI (3 YILDIZ KADEMELİ - INIT'TEN ÖNCE TANIMLANIR) ---

/**
 * Bir konunun yıldız (favori) durumunu 0, 1, 2 veya 3 olarak ayarlar.
 * Tıklandıkça kademeli olarak artar, 3'ten sonra sıfırlanır.
 */
function toggleMixedStar(topicId, currentFilter = 'all') {
    // Mevcut rating'i al (Yoksa 0 varsay)
    let currentRating = data.settings.starredTopics[topicId] || 0;

    // Döngü Mantığı: 0 -> 1 -> 2 -> 3 -> 0
    if (currentRating < 3) {
        currentRating++;
        data.settings.starredTopics[topicId] = currentRating;
    } else {
        // 3'ten sonra sıfırla (listedden sil)
        delete data.settings.starredTopics[topicId]; 
    }
    
    // Verileri kaydet ve listeyi yenile
    saveSettings(); 
    saveContentOverride(); 
    renderMixedModeList(currentFilter); 
}


/* ---------- Başlatma (Init) ve Yardımcı Fonksiyonlar ---------- */
// (init, handleSplashScreen, checkFirstLogin, vb. fonksiyonlar buraya gelecek)

/**
 * Mevcut Alan, Grup ve Fiil yapısını TSV formatında indirir.
 */
function downloadStructureTSV() {
    let tsvContent = "AlanID\tAlanTR\tAlanDE\tGrupID\tGrupAdı\tFiilID\tFiilTR\tFiilDE\n";
    const domainMap = new Map((data.domains || []).map(d => [d.id, d]));

    (data.groups || []).forEach(group => {
        const domain = group.domainId ? domainMap.get(group.domainId) : { id: '', name: '', nameDE: '' };
        const verbs = data.verbs[group.id] || [];

        if (verbs.length > 0) {
            verbs.forEach(verb => {
                const row = [
                    domain.id,
                    domain.name,
                    domain.nameDE || '',
                    group.id,
                    group.name,
                    verb.id,
                    verb.verbTR,
                    verb.verbDE
                ];
                tsvContent += row.join('\t') + '\n';
            });
        } else {
            // Fiili olmayan grupları da listeye ekle
            const row = [
                domain.id,
                domain.name,
                domain.nameDE || '',
                group.id,
                group.name,
                '', '', '' // Fiil bilgileri boş
            ];
            tsvContent += row.join('\t') + '\n';
        }
    });

    const blob = new Blob([tsvContent], { type: 'text/tab-separated-values;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'verbmatrix_structure.tsv';
    a.click();
    URL.revokeObjectURL(url);
    alert('Yapısal veri (Alan, Grup, Fiil) TSV olarak indirildi.');
}

/**
 * Yapısal veri yükleme alanını gösterir/gizler.
 */
function toggleStructureImport() {
    const area = document.getElementById('structureImportArea');
    area.style.display = area.style.display === 'none' ? 'block' : 'none';
}

/**
 * Metin alanına yapıştırılan TSV verisini işler ve veri yapısını günceller.
 */
function processStructureImport() {
    const tsvData = document.getElementById('structureInput').value.trim();
    if (!tsvData) {
        alert('Lütfen içe aktarılacak veriyi yapıştırın.');
        return;
    }

    const lines = tsvData.split('\n').slice(1); // Başlık satırını atla
    let domainsAdded = 0, groupsAdded = 0, verbsAdded = 0;

    lines.forEach(line => {
        const columns = line.split('\t').map(c => c.trim());
        if (columns.length < 8) return;

        const [alanId, alanTR, alanDE, grupId, grupAdi, fiilId, fiilTR, fiilDE] = columns;

        // Alanı işle
        if (alanId && !data.domains.find(d => d.id === alanId)) {
            data.domains.push({ id: alanId, name: alanTR, nameDE: alanDE });
            domainsAdded++;
        }

        // Grubu işle
        if (grupId && !data.groups.find(g => g.id === grupId)) {
            data.groups.push({ id: grupId, name: grupAdi, domainId: alanId, story: null });
            groupsAdded++;
        }

        // Fiili işle
        if (grupId && fiilId) {
            if (!data.verbs[grupId]) data.verbs[grupId] = [];
            if (!data.verbs[grupId].find(v => v.id === fiilId)) {
                data.verbs[grupId].push({ id: fiilId, verbTR: fiilTR, verbDE: fiilDE });
                verbsAdded++;
            }
        }
    });

    saveContentOverride();
    alert(`İçe aktarma tamamlandı!\n- Eklenen Alan: ${domainsAdded}\n- Eklenen Grup: ${groupsAdded}\n- Eklenen Fiil: ${verbsAdded}\n\nDeğişikliklerin tam olarak yansıması için sayfayı yenilemeniz önerilir.`);
    toggleStructureImport(); // Alanı gizle
}

/**
 * Uygulamanın ana başlangıç fonksiyonu.


/* ---------- BAŞLATMA (INIT) ---------- */
async function init(){
  // 1. Service Worker Kaydı
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js').then(reg => {
      console.log('SW kaydı başarılı: ', reg.scope);
    }, err => {
      console.log('SW kaydı başarısız: ', err);
    });
  }

  // 2. TTS (Ses) Motoru Hazırlığı
  if ('speechSynthesis' in window) {
    window.speechSynthesis.onvoiceschanged = () => console.log("TTS Sesleri yüklendi.");
    window.speechSynthesis.getVoices();
  }

  // 3. Event Listener'lar (Buton Bağlantıları)
  const modeBtn = document.getElementById('modeToggleBtn');
  if(modeBtn) modeBtn.addEventListener('click', toggleNightMode);
  
  const nightChk = document.getElementById('nightModeToggle');
  if(nightChk) nightChk.addEventListener('change', toggleNightMode);
  
  document.getElementById('fileInput').onchange = importDataFromFile;
  document.getElementById('progressFileInput').onchange = importSrsData;
  
  const floatingGuideBtn = document.getElementById('floatingGuideBtn');
  if (floatingGuideBtn) {
      floatingGuideBtn.onclick = showGuide;
  }
  
  // 4. Müzik Çalar Başlatma
  musicPlayer = new MusicPlayer(
      './telifsiz-klasik.mp3',
      'musicVolumeSlider',
      'musicToggleBtn',
      'settingsMusicVolume',
      'settingsMusicToggle'
  );

  // 5. Verileri Yükle
  loadSettings();
  await loadDataFromServer(); // Sunucudan veya dosyadan veriyi çek
  loadSrsData();
  updateConversionButtons();
  updateUITexts();
  updateProgressView();
  updateMixedModeCount(); // BURADA ÇAĞIRILMALI
 
  console.log('Verb Matrix');
  showView('mainMenu');
  handleSplashScreen(); 
}

// Sayfa yüklendiğinde başlat
window.addEventListener('DOMContentLoaded', init);
