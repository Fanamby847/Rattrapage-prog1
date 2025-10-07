export default function capitalizeName(Array = []) {
    if (Array.length == 0 || Array == null) {
        return [];
    }
    else{
        return Array.map(name => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase());
    }
}