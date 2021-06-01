export function getDate() {
    const d = new Date;
    return d.getDate() + '-' + d.getMonth() + '-' + d.getFullYear();
}