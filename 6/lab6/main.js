const _TARGET_ID = "imgwithcat";

window.onload = () => {
    target = _get_target();
    window.__table = document.getElementById("properties");
    print_properties(target);
}

function print_properties(obj, offset=0, key_prefix="") {
    for (x in obj) {
        console.log(key_prefix + x, obj[x]);
        process_value(key_prefix + x, obj[x], offset);
        offset += 1;
    }
}

function add_row(table, key, value, position) {
    row = table.insertRow(position);

    key_cell = row.insertCell();
    value_cell = row.insertCell();
    
    key_cell.appendChild(key);
    value_cell.appendChild(value);
}

function expand_value(key, value, position) {
    window.__table.deleteRow(position);
    print_properties(value, offset=position, key_prefix=`${key}.`);
}

function process_value(key, value, position=-1) {
    _key = document.createTextNode(key);
    has_nested_objects = typeof(value) === "object" && value !== null;
    if (!has_nested_objects) {
        _value = document.createTextNode(value);
        add_row(window.__table, _key, _value, position);
        return; 
    }
    link = document.createElement("span");
    link.innerText = value.toString();
    link.classList.add("decoratedlink");

    if (position == -1) {
        position = table.rows.length;
    }

    link.onclick = () => expand_value(key, value, position);
    add_row(window.__table, _key, link, position);
    return link;
}

function random_int(min, max) {
    if (min == undefined) {
        min = 32768;
    }
    if (max == undefined && min != undefined) {
        max = min;
        min = 0;
    }
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function _slice(obj, ...args) {
    return Array.prototype.slice.call(obj, ...args);
}

function _get_target(){
    return document.getElementById(_TARGET_ID);
}
