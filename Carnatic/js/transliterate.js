
const HKT_REGEX_LIST = [ [ 'M([cj])', 'J$1' ], [ 'M([kg])', 'G$1' ], [ 'M([TD])', 'N$1' ], [ 'M([tds])', 'n$1' ],
                         [ '\\bjJ', 'J' ], [ 'jJ', 'JJ' ], [ 'Jj', 'Jc' ], [ 'TR', 'RR' ], [ '[\\.]n', 'qqqq' ],
                         [ '[\\.]N', 'QQQQ' ], [ '\\bn', 'QQQQ' ], [ 'nd', 'QQQQd' ], [ 'nt', 'QQQQt' ],
                         [ 'n', '.n' ], [ 'QQQQ', 'n' ], [ 'qqqq', '.n' ]
                       ];

const DOT_REGEX_LIST = [ [ ' ', ' ' ], [ ',', ',' ], [ '\\.', '.' ], [ '$', '' ] ];

const superscript_code_list = new Set(SUPERSCRIPT_CODES.map(i => String.fromCharCode(i)));

function lists_to_map(l1, l2) {
    const d = new Map();
    for (let i = 0; i < l1.length; i++) {
        d.set(l1[i], l2[i]);
    }
    return d;
}

function get_freq_map(hkt_freq) {
    const freq_key_list = hkt_freq['key'];
    const freq_value_list = hkt_freq['value'];
    const freq_list = [];
    for (let i = 0; i < freq_value_list.length; i += 1) {
        freq_list.push(freq_value_list[i]);
    }
    const l_map = lists_to_map(freq_key_list, freq_list);
    return l_map;
}

function init_lang_maps(map_data) {
    const hk_tamil_maps = map_data['hk_tamil_maps'];
    const lang_maps = new Map();
    const hk_tamil_list = hk_tamil_maps['hk_tamil'].split(/\s+/);
    for (let lang in hk_tamil_maps) {
        if (MAP_KEYBOARD_DICT.hasOwnProperty(lang)) {
           const lang_list = hk_tamil_maps[lang].split(/\s+/);
           const l_map = lists_to_map(hk_tamil_list, lang_list);
           lang_maps.set(lang, l_map);
        }
    }

    const hk_maps = map_data['hk_eng_maps'];
    const e_map = lists_to_map(hk_maps['eng_input'], hk_maps['eng_output']);
    lang_maps.set('hk_eng', e_map);

    const hkt_freq = map_data['frequency']
    lang_maps.set('hk_tamil_freq', get_freq_map(hkt_freq['hk_tamil']));
    lang_maps.set('hk_eng_freq', get_freq_map(hkt_freq['hk_eng']));

    const hk_length = map_data['length'];
    lang_maps.set('hk_tamil_length', hk_length['hk_tamil']);
    lang_maps.set('hk_eng_length', hk_length['hk_eng']);

    lang_maps.set('MAP_ISO_DICT', map_data['MAP_ISO_DICT']);
    lang_maps.set('MAP_DOT_DICT', map_data['MAP_DOT_DICT']);
    lang_maps.set('MAP_INFO_DICT', map_data['MAP_INFO_DICT']);
    lang_maps.set('MAP_MONTH_DICT', map_data['MAP_MONTH_DICT']);
    lang_maps.set('KEYBOARD_LIST', map_data['CARNATIC_KBD_LIST']);
    lang_maps.set('NOTE_MAP', map_data['CARNATIC_NOTE_MAP']);

    window.LANG_MAPS = lang_maps;
}

function transliterate_map_freq_text(lang_map, maxlen, pattern, data) {
    const tokenlist = [];
    let current = 0;
    while (current < data.length) {
        let p = data[current];
        let j = 1;
        const m = pattern.has(p) ? pattern.get(p) : 0;
        if (m > 1) {
            let nextstr = data.slice(current, current + maxlen)
            for (let k = m; k > 0; k -= 1) {
                const s = nextstr.slice(0, k);
                if (lang_map.has(s)) {
                    p = s;
                    j = k;
                    break
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
    const regex_list = [];
    for (let i = 0; i < value_list.length; i += 1) {
        const value = value_list[i];
        const obj = new RegExp(prefix + value[0], 'gm');
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

function get_map_data(key) {
    const lang_map_data = window.LANG_MAPS;
    return (lang_map_data !== undefined) ? lang_map_data.get(key) : Object();
}

function transliterator_lang_init(lang) {
    const map_dot_data = get_map_data('MAP_DOT_DICT');
    const out_lang = lang.toLowerCase();
    window.DOT_REGEX_OBJ_LIST = set_regex(DOT_REGEX_LIST, map_dot_data[out_lang]);
}

function get_transliterator_text(out_lang, data) {
    const lang_map_data = window.LANG_MAPS;
    if (lang_map_data === undefined) return data;
    out_lang = out_lang.toLowerCase();
    let result = data;
    if (out_lang === 'tamil') {
        result = apply_regex(window.HKT_REGEX_OBJ_LIST, result);
    } else {
        result = result.replace('.N', 'n');
    }
    if (out_lang !== 'english') {
        const lang_map = lang_map_data.get(out_lang);
        const lang_freq = lang_map_data.get('hk_tamil_freq');
        result = transliterate_map_freq_text(lang_map, lang_map_data.get('hk_tamil_length'), lang_freq, result);
    } else {
        const lang_map = lang_map_data.get('hk_eng');
        const lang_freq = lang_map_data.get('hk_eng_freq');
        result = transliterate_map_freq_text(lang_map, lang_map_data.get('hk_eng_length'), lang_freq, result);
    }
    const map_dot_data = get_map_data('MAP_DOT_DICT');
    if (map_dot_data.hasOwnProperty(out_lang)) {
        result = apply_regex(window.DOT_REGEX_OBJ_LIST, result);
    }
    return result;
}

/*
     Language Keyboards
*/

const ROW_SIZE = 9;

function render_keys(lang_dict) {
    const row_list = [];
    const info_list = [];
    let row = [];
    let col_id = 1;
    let j = 0;
    let key_list = [ 'vowel', 'middle' ];
    for (let k = 0; k < key_list.length; k++) {
        let key = key_list[k];
        basic_list = lang_dict[key];
        for (let i = 0; i < basic_list.length; i++) {
            if (j > 0 && (j % ROW_SIZE) === 0) {
                row_list.push({ 'col' : row });
                row = []
            }
            let c = basic_list[i];
            c = c !== '.' ? c : ' ';
            const info = { 'N' : c, 'K' : c, 'T' : 'key', 'I' : col_id };
            row.push(info);
            info_list.push(info);
            col_id += 1;
            j += 1;
        }
    }
    const punctuation_list = lang_dict['special'].concat([ ' ', ':' ]);
    for (let i = 0; i < punctuation_list.length; i++) {
        const c = punctuation_list[i];
        const info = { 'N' : c, 'K' : c, 'T' : 'key', 'I' : col_id };
        if (j > 0 && (j % ROW_SIZE) === 0) {
            row_list.push({ 'col' : row });
            row = []
        }
        row.push(info);
        info_list.push(info);
        col_id += 1;
        j += 1;
    }
    const icon_list = [ 'chevron-expand', 'backspace', 'arrow-return-left' ];
    const key_name_list = [ 'vowel reset', 'backspace', 'enter' ];
    for (let i = 0; i < icon_list.length; i++) {
        const icon = icon_list[i];
        const img_str = `<i class="bi bi-${icon} ICON_FONT" onclick="on_key_click()"></i>`;
        const info = { 'N' : img_str, 'A' : key_name_list[i], 'K' : icon, 'T' : 'icon', 'I' : col_id };
        row.push(info);
        info_list.push(info);
        col_id += 1;
        j += 1;
    }
    let col_span = ((col_id - 1) % ROW_SIZE) + 1;
    if (col_span > 1) {
        row[row.length - 1]['C'] = `colspan="${col_span}"`;
    }
    row_list.push({ 'col' : row });
    row = []
    j = 0;
    key_list = [ 'consonant' ];
    for (let k = 0; k < key_list.length; k++) {
        const key = key_list[k];
        basic_list = lang_dict[key];
        for (let i = 0; i < basic_list.length; i++) {
            if (j > 0 && (j % ROW_SIZE) === 0) {
                row_list.push({ 'col' : row });
                row = []
            }
            let c = basic_list[i];
            c = c !== '.' ? c : ' ';
            const info = { 'N' : c, 'K' : c, 'T' : 'key', 'I' : col_id };
            row.push(info);
            info_list.push(info);
            col_id += 1;
            j += 1;
        }
    }
    row_list.push({ 'col' : row });
    const key_dict = { 'row' : row_list };
    return [info_list, key_dict];
}

function replace_keys(key_dict, vowel_size, key) {
    const combo_list = window.script_combo_list;
    for (let i = 0; i < vowel_size; i++) {
        const c_key = combo_list[i];
        const c = (key === '' || c_key === 0) ? key_dict[i]['N'] : key + c_key;
        const col_id = 'key_' + (i + 1);
        plain_set_html_text(col_id, c);
    }
}

function on_key_click() {
   const lang_dict = window.script_lang_dict;
   let text = document.getElementById('SEARCH_WORD').value;
   let element = event.srcElement;
   if (element.tagName === 'I') {
       event.stopPropagation();
       element = element.parentElement;
   }
   const id = element.getAttribute('id');
   const nid = parseInt(id.replace(/key_/, ''));
   const c = element.innerHTML;
   const s = c[0];
   const f = c.charCodeAt(0);
   let r_key;
   // console.log(`c ${c} f ${f} id ${id} nid ${nid}`);
   if (id === lang_dict['vowel reset']) {
       r_key = '';
   } else if (id === lang_dict['backspace']) {
       if (text.length > 0) {
           text = text.slice(0, text.length - 1);
       }
   } else if (id === lang_dict['enter']) {
       load_search_data();
   } else if (lang_dict['consonant'].includes(s) || lang_dict['middle'].includes(s)) {
       const pos = c.length - 1;
       r_key = c;
       const l = text[text.length - pos];
       if (l !== undefined && l.charCodeAt(0) === f) {
           const p = text.length - 1;
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
   if (r_key !== undefined) {
       replace_keys(window.input_key_dict, window.script_vowel_size, r_key);
   }
   document.getElementById('SEARCH_WORD').value = text;
   load_search_data();
};

function set_input_keyboard(lang) {
    const lang_dict = MAP_KEYBOARD_DICT[lang];
    window.script_lang_dict = lang_dict;
    window.script_combo_list = lang_dict['glyph'];
    window.script_vowel_size = lang_dict['glyph'].length;
    const [info_list, key_dict] = render_keys(lang_dict);
    for (let i = 0; i < info_list.length; i++) {
        const info_dict = info_list[i];
        const key_name = info_dict['A'];
        if (key_name !== undefined) {
            lang_dict[key_name] = 'key_' + info_dict['I'];
        }
    } 
    window.input_key_dict = info_list;
    render_card_template('lang-key-template', 'GENKBD', key_dict);
}

function init_input_keyboard(lang) {
    for (let lang in MAP_KEYBOARD_DICT) {
        const info_dict = MAP_KEYBOARD_DICT[lang];
        const base = parseInt(info_dict['base'], 16);
        info_dict['base'] = base;
    }
}

