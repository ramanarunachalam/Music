
const HKT_REGEX_LIST = [ [ 'M([cj])', 'J$1' ], [ 'M([kg])', 'G$1' ], [ 'M([TD])', 'N$1' ], [ 'M([td])', 'n$1' ],
                         [ '\\bjJ', 'J' ], [ 'jJ', 'JJ' ], [ 'Jj', 'Jc' ], [ 'TR', 'RR' ], [ '[\\.]n', 'qqqq' ],
                         [ '[\\.]N', 'QQQQ' ], [ '\\bn', 'QQQQ' ], [ 'nd', 'QQQQd' ], [ 'nt', 'QQQQt' ],
                         [ 'n', '.n' ], [ 'QQQQ', 'n' ], [ 'qqqq', '.n' ]
                       ];

const DOT_REGEX_LIST = [ [ ' ', ' ' ], [ ',', ',' ], [ '\\.', '.' ], [ '$', '' ] ];

let superscript_code_list = new Set(SUPERSCRIPT_CODES.map(i => String.fromCharCode(i)));

function lists_to_map(l1, l2) {
    let d = new Map();
    for(i=0;i<l1.length;i++){
        d.set(l1[i], l2[i]);
    }
    return d;
}

function init_lang_maps(map_data) {
    window.MAP_DATA = map_data;
    var lang_maps = new Map();
    var hk_tamil_list = map_data['hk_tamil'].split(/\s+/);
    for (var lang in map_data) {
         if (MAP_KEYBOARD_DICT.hasOwnProperty(lang)) {
            var lang_list = map_data[lang].split(/\s+/);
            var l_map = lists_to_map(hk_tamil_list, lang_list);
            lang_maps.set(lang, l_map);
        }
    }
    var freq_key_list = map_data['frequency']['key'].split(/\s+/);
    var freq_value_list = map_data['frequency']['value'].split(/\s+/);
    var freq_list = [];
    for (let i = 0; i < freq_value_list.length; i += 1) {
        freq_list.push(parseInt(freq_value_list[i]));
    }
    var l_map = lists_to_map(freq_key_list, freq_list);
    lang_maps.set('frequency', l_map);
    window.LANG_MAPS = lang_maps;
}

function transliterate_map_text(lang_map, maxlen, data) {
    let current = 0;
    let tokenlist = [];
    while (current < data.length) {
        let nextstr = data.slice(current, current+maxlen);
        let p = nextstr.slice(0, 1);
        let j = 1;
        for (let i = maxlen; i > 1; i -= 1) {
            let s = nextstr.slice(0, i);
            if (lang_map.hasOwnProperty(s)) {
                p = s;
                j = i;
                break
            }
        }
        var old_p = p;
        p = lang_map[p];
        p = p == undefined ? old_p : p;
        tokenlist.push(p);
        current += j;
    }
    return tokenlist.join('');
}

function transliterate_map_freq_text(lang_map, maxlen, pattern, data) {
    let tokenlist = [];
    let current = 0;
    while (current < data.length) {
        let s = data[current];
        let q = pattern.has(s) ? pattern.get(s) : 0;
        let p = s;
        let j = 1;
        if (q > 1) {
            for (let k = 1; k < maxlen; k += 1) {
                if ((current + k) < data.length) {
                    c = data[current + k];
                    s += c;
                    q = pattern.has(s) ? pattern.get(s) : 0;
                    if (q == 1) {
                        p = s;
                        j = k + 1;
                        break
                    } else if (q == 2) {
                        p = s;
                        j = k + 1;
                        continue
                    } else if (q == 3) {
                        continue
                    } else {
                        break;
                    }
                }
            }
        }
        p = lang_map.has(p) ? lang_map.get(p) : p
        tokenlist.push(p);
        current += j;
    }
    return tokenlist.join('');
}

function set_regex(value_list, prefix) {
    var regex_list = [];
    for (let i = 0; i < value_list.length; i += 1) {
        var value = value_list[i];
        var obj = new RegExp(prefix + value[0], 'gm');
        regex_list.push([ obj, value[1] ]);
    }
    return regex_list;
}

function apply_regex(regex_list, txt) {
    for (let i = 0; i < regex_list.length; i += 1) {
        txt = txt.replace(regex_list[i][0], regex_list[i][1]);
    }
    return txt;
}

function set_tamil_regex_list() {
    window.HKT_REGEX_OBJ_LIST = set_regex(HKT_REGEX_LIST, '');
}

function transliterator_lang_init(lang) {
    var out_lang = lang.toLowerCase();
    window.DOT_REGEX_OBJ_LIST = set_regex(DOT_REGEX_LIST, MAP_DOT_DICT[out_lang]);
}

function get_transliterator_text(out_lang, data) {
    var map_data = window.MAP_DATA;
    if (map_data == undefined) {
        return data;
    }
    var lang_map_data = window.LANG_MAPS;
    var map_len_data = map_data['length'];
    var out_lang = out_lang.toLowerCase();
    let result = data;
    if (out_lang == 'tamil') {
        result = apply_regex(window.HKT_REGEX_OBJ_LIST, result);
    } else {
        result = result.replace('.N', 'n');
    }
    if (out_lang != 'english') {
        var lang_map = lang_map_data.get(out_lang);
        var lang_freq = lang_map_data.get('frequency');
        result = transliterate_map_freq_text(lang_map, map_len_data['hk_tamil'], lang_freq, result);
    }
    if (out_lang == 'english') {
        result = transliterate_map_text(map_data['hk_to_eng'], map_len_data['hk_to_eng'], result);
    }
    if (MAP_DOT_DICT.hasOwnProperty(out_lang)) {
        result = apply_regex(window.DOT_REGEX_OBJ_LIST, result);
    }
    return result;
}

/*
     Language Keyboards
*/

const ROW_SIZE = 9;

function render_keys(lang_dict) {
    var row_list = [];
    var row = [];
    var col_id = 1;
    var info_list = [];
    var j = 0;
    var key_list = [ 'vowel', 'middle' ];
    for (var k = 0; k < key_list.length; k++) {
        var key = key_list[k];
        basic_list = lang_dict[key];
        for (var i = 0; i < basic_list.length; i++) {
            if (j > 0 && (j % ROW_SIZE) == 0) {
                row_list.push({ 'col' : row });
                row = []
            }
            var c = basic_list[i];
            c = c != '.' ? c : ' ';
            var info = { 'N' : c, 'K' : c, 'T' : 'key', 'I' : col_id };
            row.push(info);
            info_list.push(info);
            col_id += 1;
            j += 1;
        }
    }
    var punctuation_list = lang_dict['special'].concat([ ' ', ':' ]);
    for (var i = 0; i < punctuation_list.length; i++) {
        var c = punctuation_list[i];
        var info = { 'N' : c, 'K' : c, 'T' : 'key', 'I' : col_id };
        if (j > 0 && (j % ROW_SIZE) == 0) {
            row_list.push({ 'col' : row });
            row = []
        }
        row.push(info);
        info_list.push(info);
        col_id += 1;
        j += 1;
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
        j += 1;
    }
    var col_span = ((col_id - 1) % ROW_SIZE) + 1;
    if (col_span > 1) {
        row[row.length - 1]['C'] = `colspan="${col_span}"`;
    }
    row_list.push({ 'col' : row });
    row = []
    j = 0;
    var key_list = [ 'consonant' ];
    for (var k = 0; k < key_list.length; k++) {
        var key = key_list[k];
        basic_list = lang_dict[key];
        for (var i = 0; i < basic_list.length; i++) {
            if (j > 0 && (j % ROW_SIZE) == 0) {
                row_list.push({ 'col' : row });
                row = []
            }
            var c = basic_list[i];
            c = c != '.' ? c : ' ';
            var info = { 'N' : c, 'K' : c, 'T' : 'key', 'I' : col_id };
            row.push(info);
            info_list.push(info);
            col_id += 1;
            j += 1;
        }
    }
    row_list.push({ 'col' : row });
    var key_dict = { 'row' : row_list };
    return [info_list, key_dict];
}

function replace_keys(key_dict, vowel_size, key) {
    var combo_list = window.script_combo_list;
    for (var i = 0; i < vowel_size; i++) {
        var c_key = combo_list[i];
        var c = (key == '' || c_key == 0) ? key_dict[i]['N'] : key + c_key;
        var col_id = '#key_' + (i + 1);
        $(col_id).html(c);
    }
}

function on_key_click() {
   var lang_dict = window.script_lang_dict;
   var text = $('#SEARCH_WORD').val();
   var element = event.srcElement;
   if (element.tagName == 'IMG') {
       event.stopPropagation();
       element = element.parentElement;
   }
   var id = element.getAttribute('id');
   var nid = parseInt(id.replace(/key_/, ''));
   var c = element.innerHTML;
   var s = c[0];
   var f = c.charCodeAt(0);
   var r_key;
   // console.log(`c ${c} f ${f} id ${id} nid ${nid}`);
   if (id == lang_dict['vowel reset']) {
       r_key = '';
   } else if (id == lang_dict['backspace']) {
       if (text.length > 0) {
           text = text.slice(0, text.length - 1);
       }
   } else if (id == lang_dict['enter']) {
       load_search_data();
   } else if (lang_dict['consonant'].includes(s) || lang_dict['middle'].includes(s)) {
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
       replace_keys(window.input_key_dict, window.script_vowel_size, r_key);
   }
   $('#SEARCH_WORD').val(text);
};

function set_input_keyboard(lang) {
    var lang_dict = MAP_KEYBOARD_DICT[lang];
    window.script_lang_dict = lang_dict;
    window.script_combo_list = lang_dict['glyph'];
    window.script_vowel_size = lang_dict['glyph'].length;
    const [info_list, key_dict] = render_keys(lang_dict);
    for (var i = 0; i < info_list.length; i++) {
        var info_dict = info_list[i];
        var key_name = info_dict['A'];
        if (key_name != undefined) {
            lang_dict[key_name] = 'key_' + info_dict['I'];
        }
    } 
    window.input_key_dict = info_list;
    render_card_template('#lang-key-template', '#GENKBD', key_dict);
}

function init_input_keyboard(lang) {
    for (var lang in MAP_KEYBOARD_DICT) {
        var info_dict = MAP_KEYBOARD_DICT[lang];
        var base = parseInt(info_dict['base'], 16);
        info_dict['base'] = base;
    }
}

