function capitalizeName(tab = []) {
    if (tab.length == 0 ||tab == null) {
        return [];
    }
    else{
        return tab.map(name => name.charAt(0).toUpperCase() + 
        name.slice(1).toLowerCase());
    }
}

export { capitalizeName };
