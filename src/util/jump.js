export const jump = (pos) => {
    switch (pos) {
        case 3:
            return 14;
        case 9:
            return 4;
        case 16:
            return 31;
        case 20:
            return 58;
        case 23:
            return -19;
        case 29:
            return -22;
        case 37:
            return -12;
        case 50:
            return 22;
        case 55:
            return -45;
        case 63:
            return 18;
        case 71:
            return 24;
        case 85:
            return -5;
        case 97:
            return -23;
        default:
            return 0;
    }
}