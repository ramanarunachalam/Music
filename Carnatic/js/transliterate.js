
const HKT_REGEX_LIST = [ [ 'M([cj])', 'J$1' ], [ 'M([kg])', 'G$1' ], [ 'M([TD])', 'N$1' ], [ 'M([tds])', 'n$1' ],
                         [ '\\bjJ', 'J' ], [ 'jJ', 'JJ' ], [ 'Jj', 'Jc' ], [ 'TR', 'RR' ], [ '[\\.]n', 'qqqq' ],
                         [ '[\\.]N', 'QQQQ' ], [ '\\bn', 'QQQQ' ], [ 'nd', 'QQQQd' ], [ 'nt', 'QQQQt' ],
                         [ 'n', '.n' ], [ 'QQQQ', 'n' ], [ 'qqqq', '.n' ]
                       ];
const ENG_REGEX_LIST = [ [ '[\\.]N', 'n' ] ];
const DOT_REGEX_LIST = [ [ ' ', ' ' ], [ ',', ',' ], [ '\\.', '.' ], [ '$', '' ] ];

const MAP_DOT_DICT = {
    'hindi':    '\\u094D',
    'marathi':  '\\u094D',
    'bengali':  '\\u09CD',
    'gujarati': '\\u0ACD',
    'punjabi':  '\\u0A4D',
    'assamese': '\\u09CD'
};

const ENGLISH_REPLACE_LIST = [
                               [ /\./g, '' ],
                               [ /_/g, '' ],
                               [ /G/g, 'n' ],
                               [ /J/g, 'n' ]
                             ];


function lists_to_map(l1, l2) {
    const d = new Map();
    for (let i = 0; i < l1.length; i++) {
        d.set(l1[i], l2[i]);
    }
    return d;
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

/*
     Transliteration
*/

function get_simple_parser_text(char_map_list, data) {
    const [ char_map, token_list, max_len ] = char_map_list;
    const char_list = [];
    let current = 0;
    while (current < data.length) {
        let p = data[current];
        let j = 1;
        const m = token_list.has(p) ? token_list.get(p) : 0;
        if (m > 1) {
            let next_str = data.slice(current, current + max_len)
            for (let k = m; k > 0; k -= 1) {
                const s = next_str.slice(0, k);
                if (char_map.has(s)) {
                    p = s;
                    j = k;
                    break
                }
            }
        }
        p = char_map.has(p) ? char_map.get(p) : p
        char_list.push(p);
        current += j;
    }
    return char_list.join('');
}

function get_char_map_list(n_hk, n_freq, n_len) {
    const map_data = window.LANG_DATA['map'];
    const [ from_keys, to_keys ] = map_data[n_hk];
    const char_map = lists_to_map(from_keys.split(' '), to_keys.split(' ')); 
    const [ freq_keys, freq_values ] = map_data[n_freq];
    const key_list = freq_keys.split(',');
    const value_list = [];
    for (const v of freq_values.split(',')) {
        value_list.push(+v);
    }
    const f_map = lists_to_map(key_list, value_list);
    const max_len = map_data[n_len];
    const char_map_list = [ char_map, f_map, max_len ];
    return char_map_list;
}

function transliterator_lang_init(lang) {
    const out_lang = lang.toLowerCase();
    if (out_lang === 'tamil')  window.HKT_REGEX_OBJ_LIST = set_regex(HKT_REGEX_LIST, '');
    else  window.HKT_REGEX_OBJ_LIST = set_regex(ENG_REGEX_LIST, '');
    window.DOT_REGEX_OBJ_LIST = set_regex(DOT_REGEX_LIST, MAP_DOT_DICT[out_lang]);

    if (!(lang in window.TRANS_LANG_MAPS)) {
        window.TRANS_LANG_MAPS[lang] = get_char_map_list('from_hk', 'from_freq', 'from_length');
    }
    window.TRANS_CHAR_MAP = window.TRANS_LANG_MAPS[lang];
    window.SEARCH_CHAR_MAP = get_char_map_list('to_hk', 'to_freq', 'to_length');
}

function transliterate_hk_to_lang(out_lang, text) {
    if (text === undefined) return text;
    if (window.TRANS_LANG_MAPS === undefined) return text;
    out_lang = out_lang.toLowerCase();
    text = apply_regex(window.HKT_REGEX_OBJ_LIST, text);
    text = get_simple_parser_text(window.TRANS_CHAR_MAP, text);
    if (out_lang in MAP_DOT_DICT) text = apply_regex(window.DOT_REGEX_OBJ_LIST, text);
    return text;
}

function transliterate_lang_to_hk(word) {
    let new_word = get_simple_parser_text(window.SEARCH_CHAR_MAP, word);
    if (word !== new_word) {
        for (const expr of ENGLISH_REPLACE_LIST) {
            new_word = new_word.replace(expr[0], expr[1]);
        }
    }
    // console.log('transliterate_lang_to_hk:', word, new_word);
    return new_word;
}

/*
     Language Keyboards
*/

const SUPERSCRIPT_CODES = [ 0x00B2, 0x00B3, 0x2074 ];
const superscript_code_list = new Set(SUPERSCRIPT_CODES.map(i => String.fromCharCode(i)));

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

function set_input_keyboard(kbd_dict) {
    const base = kbd_dict['base'];
    if (typeof base === 'string') kbd_dict['base'] = parseInt(base, 16);
    window.script_lang_dict = kbd_dict;
    window.script_combo_list = kbd_dict['glyph'];
    window.script_vowel_size = kbd_dict['glyph'].length;
    const [info_list, key_dict] = render_keys(kbd_dict);
    for (let i = 0; i < info_list.length; i++) {
        const info_dict = info_list[i];
        const key_name = info_dict['A'];
        if (key_name !== undefined) {
            kbd_dict[key_name] = 'key_' + info_dict['I'];
        }
    } 
    window.input_key_dict = info_list;
    render_card_template('lang-key-template', 'GENKBD', key_dict);
}

function transliterator_init() {
    window.TRANS_LANG_MAPS = {};
}

