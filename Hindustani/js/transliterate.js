
const MAP_LANG_DICT = {
    'English': 'English',
    'हिंदी': 'Hindi',
    'मराठी': 'Marathi',
    'ಕನ್ನಡ': 'Kannada',
    'বাংলা': 'Bengali',
    'ગુજરાતી': 'Gujarati',
    'ਪੰਜਾਬੀ': 'Punjabi',
    'தமிழ்': 'Tamil',
    'తెలుగు': 'Telugu',
    'മലയാളം': 'Malayalam'
}

const MAP_ISO_DICT = {
    'English': 'en-IN',
    'Hindi': 'hi-IN',
    'Marathi': 'mr-IN',
    'Kannada': 'kn-IN',
    'Bengali': 'bn-IN',
    'Gujarati': 'gu-IN',
    'Punjabi': 'pa-IN',
    'Tamil': 'ta-IN',
    'Telugu': 'te-IN',
    'Malayalam': 'ml-IN'
}

const MAP_INFO_DICT = {
    'Hindi': {
        'Raga': 'राग',
        'Artist': 'कलाकार',
        'Composer': 'गीतकार',
        'Type': 'प्रकार',
        'Song': 'गीत',
        'About': 'बारे',
        'Search': 'खोज',
        'Playlist': 'प्लेलिस्ट',
        'References': 'संदर्भ',
        'Born': 'जन्म',
        'Died': 'मरण',
        'Gharana': 'घराना',
        'Thaat': 'ठाट',
        'Aroha': 'आरोही',
        'Avaroha': 'अवरोही',
        'Tala': 'ताल',
        'Tala name': 'ताल नाम',
        'Tala angas': 'ताल आगा',
        'Tala count': 'ताल गिनती',
        'Language': 'भाषा',
        'God': 'भगवान',
        'English': 'अंग्रेज़ी',
        'Tamil': 'तमिल',
        'Telugu': 'तेलुगु ',
        'Kannada': 'कन्नड़',
        'Malayalam': 'मलयालम',
        'Hindi': 'हिंदी',
        'Videos': 'वीडियो',
        'Ragas': 'राग',
        'Artists': 'कलाकार',
        'Composers': 'गीतकार',
        'Types': 'प्रकार',
        'Songs': 'गाने',
        'Duration': 'अवधि',
        'Views': 'विचारों',
        'Updated': 'अपडेट',
        'Search Results': 'खोज परिणाम'
    },
    'Marathi': {
        'Raga': 'राग',
        'Artist': 'कलाकार',
        'Composer': 'गीतकार',
        'Type': 'प्रकार',
        'Song': 'गीत',
        'About': 'बद्दल',
        'Search': 'शोधा',
        'Playlist': 'प्लेलिस्ट',
        'References': 'संदर्भ',
        'Born': 'जन्म',
        'Died': 'मरण',
        'Gharana': 'घराना',
        'Thaat': 'ठाट',
        'Aroha': 'आरोही',
        'Avaroha': 'अवरोही',
        'Tala': 'ताल',
        'Tala name': 'ताल नाम',
        'Tala angas': 'ताल आगा',
        'Tala count': 'ताल गिनती',
        'Language': 'भाषा',
        'God': 'भगवान',
        'English': 'अंग्रेज़ी',
        'Tamil': 'तमिल',
        'Telugu': 'तेलुगु ',
        'Kannada': 'कन्नड़',
        'Malayalam': 'मलयालम',
        'Hindi': 'हिंदी',
        'Videos': 'व्हिडिओ',
        'Ragas': 'राग',
        'Artists': 'कलाकार',
        'Composers': 'गीतकार',
        'Types': 'प्रकार',
        'Songs': 'गाणी',
        'Duration': 'कालावधी',
        'Views': 'दृश्ये',
        'Updated': 'अपडेट',
        'Search Results': 'शोध परिणाम'
    },
    'Bengali': {
        'Raga': 'রাগ',
        'Artist': 'কলাভৃৎ',
        'Composer': 'গীতিকার',
        'Type': 'প্রকার',
        'Song': 'গীত',
        'About': 'সম্পর্কিত',
        'Search': 'অনুসন্ধান',
        'Playlist': 'প্লেলিস্ট',
        'References': 'তথ্যসূত্র',
        'Born': 'জন্ম',
        'Died': 'মৃত্যু',
        'Gharana': 'ঘরানা',
        'Thaat': 'যে',
        'Aroha': 'আরোহী',
        'Avaroha': 'অবতরণ',
        'Tala': 'তাল',
        'Tala name': 'তাল নাম',
        'Tala angas': 'তাল অ্যাঙ্গাস',
        'Tala count': 'তাল গণনা',
        'Language': 'ভাষা',
        'God': 'সৃষ্টিকর্তা',
        'English': 'ইংরেজি',
        'Tamil': 'তামিল',
        'Telugu': 'তেলেগু',
        'Kannada': 'কান্নাডা',
        'Malayalam': 'মালায়ালাম',
        'Hindi': 'হিন্দি',
        'Videos': 'ভিডিও',
        'Ragas': 'রাগ',
        'Artists': 'কলাভৃৎ',
        'Composers': 'গীতিকার',
        'Types': 'প্রকার',
        'Songs': 'গীত',
        'Duration': 'সময়কাল',
        'Views': 'দেখুন',
        'Updated': 'আপডেট',
        'Search Results': 'অনুসন্ধান ফলাফল'
    },
    'Gujarati': {
        'Raga': 'રાગ',
        'Artist': 'કલાકાર',
        'Composer': 'ગીતકાર',
        'Type': 'પ્રકાર',
        'Song': 'ગીત',
        'About': 'વિશે',
        'Search': 'શોધો',
        'Playlist': 'પ્લેલિસ્ટ',
        'References': 'સંદર્ભ',
        'Born': 'જન્મ',
        'Died': 'મૃત્યુ',
        'Gharana': 'ઘરના',
        'Thaat': 'થાટ',
        'Aroha': 'ચડતા',
        'Avaroha': 'ઉતરાણ',
        'Tala': 'તાલા',
        'Tala name': 'તાલા નામ',
        'Tala angas': 'તાલા અંગસ',
        'Tala count': 'તાલા ગણતરી',
        'Language': 'ભાષા',
        'God': 'भगवान',
        'English': 'अंग्रेज़ी',
        'Tamil': 'तमिल',
        'Telugu': 'तेलुगु ',
        'Kannada': 'कन्नड़',
        'Malayalam': 'मलयालम',
        'Hindi': 'हिंदी',
        'Videos': 'વિડિઓઝ',
        'Ragas': 'રાગ',
        'Artists': 'કલાકાર',
        'Composers': 'ગીતકાર',
        'Types': 'પ્રકાર',
        'Songs': 'ગીત',
        'Duration': 'અવધિ',
        'Views': 'વિચારો',
        'Updated': 'અપડેટ',
        'Search Results': 'શોધ પરિણામો'
    },
    'Punjabi': {
        'Raga': 'ਰਾਗ',
        'Artist': 'ਕਲਾਕਾਰ',
        'Composer': 'ਗੀਤਕਾਰ',
        'Type': 'ਕਿਸਮ',
        'Song': 'ਗਾਣਾ',
        'About': 'ਬਾਰੇ',
        'Search': 'ਖੋਜ',
        'Playlist': 'ਪਲੇਲਿਸਟ',
        'References': 'ਹਵਾਲੇ',
        'Born': 'ਜਨਮ',
        'Died': 'ਮੌਤ',
        'Gharana': 'ਘਰਾਨਾ',
        'Thaat': 'ਕਿ',
        'Aroha': 'ਚੜ੍ਹਨਾ',
        'Avaroha': 'ਉਤਰਾਈ',
        'Tala': 'ਤਾਲਾ',
        'Tala name': 'ਤਾਲਾ ਨਾਮ',
        'Tala angas': 'ਤਾਲਾ ਅੰਗਸ',
        'Tala count': 'ਤਾਲਾ ਗਿਣਤੀ',
        'Language': 'ਭਾਸ਼ਾ',
        'God': 'ਰੱਬ',
        'English': 'अंग्रेज़ी',
        'Tamil': 'तमिल',
        'Telugu': 'तेलुगु ',
        'Kannada': 'कन्नड़',
        'Malayalam': 'मलयालम',
        'Hindi': 'हिंदी',
        'Videos': 'ਵੀਡੀਓ',
        'Ragas': 'ਰਾਗ',
        'Artists': 'ਕਲਾਕਾਰ',
        'Composers': 'ਗੀਤਕਾਰ',
        'Types': 'ਕਿਸਮ',
        'Songs': 'ਗਾਣਾ',
        'Duration': 'ਅਵਧੀ',
        'Views': 'ਵਿਚਾਰ',
        'Updated': 'ਅੱਪਡੇਟ',
        'Search Results': 'ਖੋਜ ਨਤੀਜੇ'
    },
    'Tamil': {
        'Raga': 'ராகம்',
        'Artist': 'கலைஞர்',
        'Composer': 'கவிஞர்',
        'Type': 'வகை',
        'Song': 'பாடல்',
        'About': 'பற்றி',
        'Search': 'தேடு',
        'Playlist': 'பிளேலிஸ்ட்',
        'References': 'குறிப்புகள்',
        'Born': 'பிறப்பு',
        'Died': 'இறப்பு',
        'Gharana': 'கரானா',
        'Thaat': 'தாட்',
        'Aroha': 'ஆரோகணம்',
        'Avaroha': 'அவரோகணம்',
        'Tala': 'தாளம்',
        'Tala name': 'தாள பெயர்',
        'Tala angas': 'தாள அங்கங்கள்',
        'Tala count': 'தாள எண்ணிக்கை',
        'Language': 'மொழி',
        'God': 'இறைவன்',
        'English': 'ஆங்கிலம்',
        'Tamil': 'தமிழ்',
        'Telugu': 'தெலுங்கு',
        'Kannada': 'கன்னடா',
        'Malayalam': 'மலையாளம்',
        'Hindi': 'இந்தி',
        'Videos': 'வீடியோக்கள்',
        'Ragas': 'ராகங்கள்',
        'Artists': 'கலைஞர்கள்',
        'Composers': 'கவிஞர்கள்',
        'Types': 'வகைகள்',
        'Songs': 'பாடல்கள்',
        'Duration': 'காலம்',
        'Views': 'பார்வைகள்',
        'Updated': 'புதுப்பிக்கப்பட்டது',
        'Search Results': 'தேடல் முடிவுகள்'
    },
    'Telugu': {
        'Raga': 'రాగం',
        'Artist': 'కళాకారుడు',
        'Composer': 'కవి',
        'Type': 'రకము',
        'Song': 'పాట',
        'About': 'గురించి',
        'Search': 'వెతకండి',
        'Playlist': 'ప్లేలిస్ట్',
        'References': 'ప్రస్తావనలు',
        'Born': 'జననం',
        'Died': 'మరణం',
        'Gharana': 'ఘరానా',
        'Thaat': 'థాట్',
        'Aroha': 'ఆరోహణ',
        'Avaroha': 'అవరోహణ',
        'Tala': 'తాలా',
        'Tala name': 'తాలా పేరు',
        'Tala angas': 'తాలా అంగస్',
        'Tala count': 'తాలా లెక్కింపు ',
        'Language': 'భాష',
        'God': 'దేవుడు',
        'English': 'ఆంగ్లం',
        'Tamil': 'తమిళం',
        'Telugu': 'తెలుగు',
        'Kannada': 'కన్నడ',
        'Malayalam': 'మలయాళం',
        'Hindi': 'సంస్కృతo',
        'Videos': 'వీడియోలు',
        'Ragas': 'రాగాలు',
        'Artists': 'కళాకారులు',
        'Composers': 'కవులు',
        'Types': 'రకాలు',
        'Songs': 'పాటలు',
        'Duration': 'వ్యవధి',
        'Views': 'వీక్షణలు',
        'Updated': 'నవీకరించబడింది',
        'Search Results': 'శోధన ఫలితాలు'
    },
    'Kannada': {
        'Raga': 'ರಾಗ',
        'Artist': 'ಕಲಾವಿದ',
        'Composer': 'ಕವಿ',
        'Type': 'ವಿಧ',
        'Song': 'ಹಾಡು',
        'About': 'ಬಗ್ಗೆ',
        'Search': 'ಹುಡುಕಿ',
        'Playlist': 'ಪ್ಲೇಲಿಸ್ಟ್',
        'References': 'ಉಲ್ಲೇಖಗಳು',
        'Born': 'ಜನನ',
        'Died': 'ಮರಣ',
        'Gharana': 'ಘರಾನಾ',
        'Thaat': 'ಥಾಟ್',
        'Aroha': 'ಆರೋಹಣ',
        'Avaroha': 'ಅವರೋಹಣ',
        'Tala': 'ತಾಳಾ',
        'Tala name': 'ತಾಳಾ ಹೆಸರು',
        'Tala angas': 'ತಾಳಾ ಅಂಗಗಳು',
        'Tala count': 'ತಾಳಾ ಎಣಿಕೆ',
        'Language': 'ಭಾಷೆ',
        'God': 'ದೇವರು',
        'English': 'ಆಂಗ್ಲ',
        'Tamil': 'ತಮಿಳು',
        'Telugu': 'ತೆಲುಗು',
        'Kannada': 'ಕನ್ನಡ',
        'Malayalam': 'ಮಲಯಾಳಂ',
        'Hindi': 'ಹಿಂದಿ',
        'Videos': 'ವೀಡಿಯೊಗಳು',
        'Ragas': 'ರಾಗಗಳು',
        'Artists': 'ಕಲಾವಿದರು',
        'Composers': 'ಕವಿಗಳು',
        'Types': 'ವಿಧಗಳು',
        'Songs': 'ಹಾಡುಗಳು',
        'Duration': 'ಅವಧಿ',
        'Views': 'ವೀಕ್ಷಣೆಗಳು',
        'Updated': 'ನವೀಕರಿಸಲಾಗಿದೆ',
        'Search Results': 'ಹುಡುಕಾಟ ಫಲಿತಾಂಶಗಳು'
    },
    'Malayalam': {
        'Raga': 'രാഗം',
        'Artist': 'കലാകാരി',
        'Composer': 'കവി',
        'Type': 'തരം',
        'Song': 'ഗാനം',
        'About': 'കുറിച്ച്',
        'Search': 'തിരയൽ',
        'Playlist': 'പ്പ്ളേലിസ്ട്',
        'References': 'കുറിപ്പുകൾ',
        'Born': 'ജനനം ',
        'Died': 'മരണം',
        'Gharana': 'ഘരാന',
        'Thaat': 'ഥാട്',
        'Aroha': 'ആരോഹണം',
        'Avaroha': 'അവരോഹണം',
        'Tala': 'താളം',
        'Tala name': 'താളം പേര്',
        'Tala angas': 'താളം അംഗങ്ങൾ',
        'Tala count': 'താളം എണ്ണം',
        'Language': 'ഭാഷ',
        'God': 'ദൈവം',
        'English': 'ഇംഗ്ലീഷ്',
        'Tamil': 'തമിഴ്',
        'Telugu': 'തെലുങ്ക്',
        'Kannada': 'കന്നഡ',
        'Malayalam': 'മലയാളം',
        'Hindi': 'ഹിന്ദി',
        'Videos': 'വീഡിയോകൾ',
        'Ragas': 'രാഗങ്ങൾ',
        'Artists': 'കലാകാരന്മാർ',
        'Composers': 'കവികൾ ',
        'Types': 'തരങ്ങൾ',
        'Songs': 'ഗാനങ്ങൾ',
        'Duration': 'കാലാവധി',
        'Views': 'കാഴ്ചകൾ',
        'Updated': 'നവീകരിക്കുക',
        'Search Results': 'തിരയൽ ഫലങ്ങൾ'
    }
};

const MAP_MONTH_DICT = {
    'Hindi': {
        'Jan': 'जनवरी',
        'Feb': 'फ़रवरी',
        'Mar': 'मार्च',
        'Apr': 'अप्रैल',
        'May': 'मई',
        'Jun': 'जून',
        'Jul': 'जुलाई',
        'Aug': 'अगस्त',
        'Sep': 'सितंबर',
        'Oct': 'अक्टूबर',
        'Nov': 'नवंबर',
        'Dec': 'दिसंबर'
    },
    'Bengali': {
        'Jan': 'জানুয়ারী',
        'Feb': 'ফেব্রুয়ারী',
        'Mar': 'মার্চ',
        'Apr': 'এপ্রিল',
        'May': 'মে',
        'Jun': 'জুন',
        'Jul': 'জুলাই',
        'Aug': 'আগস্ট',
        'Sep': 'সেপ্টেম্বর',
        'Oct': 'অক্টোবর',
        'Nov': 'নভেম্বর',
        'Dec': 'ডিসেম্বর'
    },
    'Tamil': {
        'Jan': 'ஜனவரி',
        'Feb': 'பிப்ரவரி',
        'Mar': 'மார்ச்',
        'Apr': 'ஏப்ரல்',
        'May': 'மே',
        'Jun': 'ஜூன்',
        'Jul': 'ஜூலை',
        'Aug': 'ஆகஸ்ட்',
        'Sep': 'செப்டம்பர்',
        'Oct': 'அக்டோபர்',
        'Nov': 'நவம்பர்',
        'Dec': 'டிசம்பர்'
    },
    'Telugu': {
        'Jan': 'జనవరి',
        'Feb': 'ఫిబ్రవరి',
        'Mar': 'మార్చి',
        'Apr': 'ఏప్రిల్',
        'May': 'మే',
        'Jun': 'జూన్',
        'Jul': 'జూలై',
        'Aug': 'ఆగస్టు',
        'Sep': 'సెప్టెంబర్',
        'Oct': 'అక్టోబర్',
        'Nov': 'నవంబర్',
        'Dec': 'డిసెంబర్'
    },
    'Kannada': {
        'Jan': 'ಜನವರಿ',
        'Feb': 'ಫೆಬ್ರವರಿ',
        'Mar': 'ಮಾರ್ಚ್',
        'Apr': 'ಏಪ್ರಿಲ್',
        'May': 'ಮೇ',
        'Jun': 'ಜೂನ್',
        'Jul': 'ಜುಲೈ',
        'Aug': 'ಆಗಸ್ಟ್',
        'Sep': 'ಸೆಪ್ಟೆಂಬರ್',
        'Oct': 'ಅಕ್ಟೋಬರ್',
        'Nov': 'ನವೆಂಬರ್',
        'Dec': 'ಡಿಸೆಂಬರ್'
    },
    'Malayalam': {
        'Jan': 'ജനുവരി',
        'Feb': 'ഫെബ്രുവരി',
        'Mar': 'മാർച്ച്',
        'Apr': 'ഏപ്രിൽ',
        'May': 'മേയ്',
        'Jun': 'ജൂൺ',
        'Jul': 'ജൂലൈ',
        'Aug': 'ആഗസ്റ്റ്',
        'Sep': 'സെപ്തംബർ',
        'Oct': 'ഒക്ടോബർ',
        'Nov': 'നവംബർ',
        'Dec': 'ഡിസംബർ'
    }
}

function transliterate_map_text(map, maxlen, data) {
    let current = 0;
    let tokenlist = [];
    while (current < data.length) {
        let nextstr = data.slice(current, current+maxlen);
        let p = nextstr.slice(0, 1);
        let j = 1;
        for (let i = maxlen; i > 1; i -= 1) {
            let s = nextstr.slice(0, i);
            if (map.hasOwnProperty(s)) {
                p = s;
                j = i;
                break
            }
        }
        var old_p = p;
        p = map[p];
        p = p == undefined ? old_p : p;
        tokenlist.push(p);
        current += j;
    }
    return tokenlist.join('');
}

function preprocess_harvardkyoto_tamil_to_tamil(input_txt){
    let txt = input_txt;
    txt = txt.replace(/M([cj])/gm, 'J$1');
    txt = txt.replace(/M([kg])/gm, 'G$1');
    txt = txt.replace(/M([TD])/gm, 'N$1');
    txt = txt.replace(/M([td])/gm, 'n$1');        
    txt = txt.replace(/\bjJ/gm, 'J');
    txt = txt.replace(/jJ/gm, 'JJ');
    txt = txt.replace(/Jj/gm, 'Jc');
    txt = txt.replace(/TR/gm, 'RR');
    txt = txt.replace(/[.]n/gm, 'qqqq');
    txt = txt.replace(/[.]N/gm, "QQQQ");
    txt = txt.replace(/\bn/gm, "QQQQ");
    txt = txt.replace(/nd/gm, "QQQQd");
    txt = txt.replace(/nt/gm, "QQQQt");
    txt = txt.replace(/n/gm, '.n');
    txt = txt.replace(/QQQQ/gm, "n");
    txt = txt.replace(/qqqq/gm, ".n");
    return txt;
}

const MAP_DOT_DICT = {
    'hindi': '\\u094D',
    'marathi': '\\u094D',
    'bengali': '\\u09CD',
    'gujarati': '\\u0ACD',
    'punjabi': '\\u0A4D',
}

function get_transliterator_text(out_lang, data) {
    var map_data = window.MAP_DATA;
    if (map_data == undefined) {
        return data;
    }
    var map_len_data = map_data['length'];
    var out_lang = out_lang.toLowerCase();
    let result = '';
    if (out_lang == 'tamil') {
        result = preprocess_harvardkyoto_tamil_to_tamil(data);
    } else {
        // result = transliterate_map_text(map_data['hkt_to_hk], data);
        result = data;
    }
    result = transliterate_map_text(map_data[out_lang], map_len_data[out_lang], result);
    if (out_lang == 'english') {
        result = transliterate_map_text(map_data['hk_to_eng'], map_len_data['hk_to_eng'], result);
    }
    if (MAP_DOT_DICT.hasOwnProperty(out_lang)) {
        var base = MAP_DOT_DICT[out_lang];
        var re = new RegExp(base + ' ', 'gm');
        result = result.replace(re, ' ');
        var re = new RegExp(base + ',', 'gm');
        result = result.replace(re, ',');
        var re = new RegExp(base + '\\.', 'gm');
        result = result.replace(re, '.');
        var re = new RegExp(base + '$', 'gm');
        result = result.replace(re, '');
    }
    return result;
}

/*
     Language Keyboards
*/

const ROW_SIZE = 9;

function render_keys(lang_dict) {
    var basic_list = lang_dict['basic'];
    var combo_list = lang_dict['combo'];
    var row_list = [];
    var row = [];
    var col_id = 1;
    var info_list = [];
    for (var i = 0; i < basic_list.length; i++) {
        if (i > 0 && (i % ROW_SIZE) == 0) {
            row_list.push({ 'col' : row });
            row = []
        }
        var c = basic_list[i];
        c = c != '.' ? c : ' ';
        var info = { 'N' : c, 'K' : c, 'T' : 'key', 'I' : col_id };
        row.push(info);
        info_list.push(info);
        col_id += 1;
    }
    var punctuation_list = [ ':', ' ' ];
    for (var i = 0; i < punctuation_list.length; i++) {
        var c = punctuation_list[i];
        var info = { 'N' : c, 'K' : c, 'T' : 'key', 'I' : col_id };
        row.push(info);
        info_list.push(info);
        col_id += 1;
    }
    var icon_list = [ 'chevron-expand', 'backspace', 'arrow-return-left' ];
    var key_name_list = [ 'vowel reset', 'backspace', 'enter' ];
    for (var i = 0; i < icon_list.length; i++) {
        var icon = icon_list[i];
        var img_str = `<img class="ICON" src="icons/${icon}.svg" onclick="on_key_click()">`;
        var info = { 'N' : img_str, 'A' : key_name_list[i], 'K' : icon, 'T' : 'icon', 'I' : col_id };
        row.push(info);
        info_list.push(info);
        col_id += 1;
    }
    var col_span = ((col_id - 1) % ROW_SIZE) + 1;
    if (col_span > 1) {
        row[row.length - 1]['C'] = `colspan="${col_span}"`;
    }
    row_list.push({ 'col' : row });
    var key_dict = { 'row' : row_list };
    return [info_list, key_dict];
}

function replace_keys(key_dict, vowel_size, key) {
    var combo_list = window.parent.script_combo_list;
    for (var i = 0; i < vowel_size; i++) {
        var c_key = combo_list[i];
        var c = (key == '' || c_key == 0) ? key_dict[i]['N'] : key + c_key;
        var col_id = '#key_' + (i + 1);
        $(col_id).html(c);
    }
}

function on_key_click() {
   var lang_dict = window.parent.script_lang_dict;
   var text = $('#SEARCH_WORD').val();
   var element = event.srcElement;
   if (element.tagName == 'IMG') {
       event.stopPropagation();
       element = element.parentElement;
   }
   var id = element.getAttribute('id');
   var nid = parseInt(id.replace(/key_/, ''));
   var c = element.innerHTML;
   var f = c.charCodeAt(0);
   var r_key;
   if (id == lang_dict['vowel reset']) {
       r_key = '';
   } else if (id == lang_dict['backspace']) {
       if (text.length > 0) {
           text = text.slice(0, text.length - 1);
       }
   } else if (id == lang_dict['enter']) {
       load_search_data();
   } else if (window.parent.script_consonant_start <= f && f <= window.parent.script_consonant_end) {
       var pos = c.length - 1;
       var r_key = c;
       var l = text[text.length - pos];
       if (l != undefined && l.charCodeAt(0) == f) {
           var p = text.length - 1;
           if (superscript_code_list.has(text[p])) {
               text = text.slice(0, p) + c[pos - 1] + c[pos];
           } else {
               text += c[pos];
           }
           r_key = '';
       } else {
           if (nid <= lang_dict['vowels'] || c.length > 3) {
               r_key = '';
           }
           text += c;
       }
   } else {
       text += c;
   }
   if (r_key != undefined) {
       replace_keys(window.parent.input_key_dict, window.parent.script_vowel_size, r_key);
   }
   $('#SEARCH_WORD').val(text);
};

function sanskrit_to_indic(base) {
    let basic_list = []
    for (var i = 0; i < sanskrit_basic_list.length; i++) {
        var c = sanskrit_basic_list[i];
        if (c != '.') {
            var k = sanskrit_basic_list[i].charCodeAt(0);
            var l = k + (base - 0x0900);
            c = String.fromCharCode(l);
        }
        basic_list.push(c);
    }
    let combo_code_list = [];
    for (var i = 0; i < sanskrit_basic_list.length; i++) {
        var c = sanskrit_combo_code_list[i] + (base - 0x0900);
        combo_code_list.push(c);
    }
    let combo_list = combo_code_list.map(i => String.fromCharCode(i));
    return [ basic_list, combo_list ];
}

function set_input_keyboard(lang) {
    var lang_dict = lang_key_dict[lang];
    window.parent.script_lang_dict = lang_dict;
    window.parent.script_combo_list = lang_dict['combo'];
    window.parent.script_vowel_size = lang_dict['vowels'];
    var script_consonant_base = (lang_dict['base'] != 0) ? (lang_dict['base'] + 0x0015) : 0;
    window.parent.script_consonant_start = script_consonant_base;
    window.parent.script_consonant_end = script_consonant_base + 36;
    const [info_list, key_dict] = render_keys(lang_dict);
    for (var i = 0; i < info_list.length; i++) {
        var info_dict = info_list[i];
        var key_name = info_dict['A'];
        if (key_name != undefined) {
            lang_dict[key_name] = 'key_' + info_dict['I'];
        }
    } 
    window.parent.input_key_dict = info_list;
    render_card_template('#lang-key-template', '#GENKBD', key_dict);
}

var superscript_code_list = [ 0x00B2, 0x00B3, 0x2074 ];
superscript_code_list = superscript_code_list.map(i => String.fromCharCode(i));
superscript_code_list = new Set(superscript_code_list)

let tamil_basic_keys = (`அ ஆ இ  ஈ உ ஊ எ ஏ ஐ ஒ ஓ ஔ ஜ ஷ ஸ ஶ க்ஷ ஹ க ங ச ஞ ட ண த ந ப ம ய ர ல வ ழ ள ற ன  ஃ ௐ ஸ்ரீ`);
let tamil_basic_list = tamil_basic_keys.split(/\s+/);
let tamil_combo_code_list = [ 0x0BCD, 0x0BBE, 0x0BBF, 0x0BC0, 0x0BC1, 0x0BC2, 0x0BC6, 0x0BC7, 0x0BC8, 0x0BCA, 0x0BCB, 0x0BCC ];
let tamil_combo_list = tamil_combo_code_list.map(i => String.fromCharCode(i));

let sanskrit_basic_keys = (`अ आ इ ई उ ऊ ऋ ऌ ऎ ए ऐ ऒ ओ औ ॠ ॡ  ँ ं ः ऽ ॐ . . . . . . क ख ग घ ङ च छ ज झ ञ ट ठ ड ढ ण त थ द ध न ऩ प फ ब भ म य र ऱ ल ळ ऴ व श ष स ह`);
let sanskrit_basic_list = sanskrit_basic_keys.split(/\s+/);
let sanskrit_combo_code_list = [ 0x094D, 0x093E, 0x093F, 0x0940, 0x0941, 0x0942, 0x0943, 0x0962, 0x0946, 0x0947, 0x0948, 0x094A, 0x094B, 0x094C, 0x0944, 0x0963, 0x0901, 0x0902, 0x903 ];
let sanskrit_combo_list = sanskrit_combo_code_list.map(i => String.fromCharCode(i));

let dummy_combo_list = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
let english_basic_keys = (`a A i I u U R lR e E ai o O au RR lRR ~ M H ' oM K . . . . . k kh g gh n c ch j jh n T Th D Dh N t th d dh n n p ph b bh m y r r l L zh v S sh s h`);
let english_basic_list = english_basic_keys.split(/\s+/);
let english_combo_list = dummy_combo_list;

var lang_key_dict = { 'hindi'     : { 'basic' : sanskrit_basic_list, 'combo' : sanskrit_combo_list,  'vowels' : 19, 'base' : 0x0900 },
                      'marathi'   : { 'vowels' : 19, 'base' : 0x0900 },
                      'kannada'   : { 'vowels' : 19, 'base' : 0x0C80 },
                      'bengali'   : { 'vowels' : 19, 'base' : 0x0980 },
                      'gujarati'  : { 'vowels' : 19, 'base' : 0x0A80 },
                      'punjabi'   : { 'vowels' : 19, 'base' : 0x0A00 },
                      'tamil'     : { 'vowels' : 12, 'base' : 0x0B80, 'basic' : tamil_basic_list, 'combo' : tamil_combo_list },
                      'telugu'    : { 'vowels' : 19, 'base' : 0x0C00 },
                      'malayalam' : { 'vowels' : 19, 'base' : 0x0D00 },
                      'english'   : { 'vowels' : 19, 'base' : 0, 'basic' : english_basic_list, 'combo' : english_combo_list }
                    }

for (var key in lang_key_dict) {
    var info_dict = lang_key_dict[key];
    if (info_dict['basic'] == undefined) {
        var base = info_dict['base'];
        var [basic_list, combo_list] = sanskrit_to_indic(base);
        info_dict['basic'] = basic_list;
        info_dict['combo'] = combo_list;
    }
}

