export class GPSPosition {
    private time: number;
    private lat: number;
    private lon: number;
    private fixed: boolean;
    private quality: number;
    private dir: number;
    private altitude: number;
    private velocity: number;

    constructor() {
        this.time = 0.0;
        this.lat = 0.0;
        this.lon = 0.0;
        this.fixed = false;
        this.quality = 0;
        this.dir = 0.0;
        this.altitude = 0.0;
        this.velocity = 0.0;
    }

    public updateFix(): void {
        this.fixed = this.quality > 0;
    }

    public toString(): string {
        return `POSITION lat: ${this.lat}, lon: ${this.lon}, time: ${this.time}, Q: ${this.quality}, dir: ${this.dir}, alt: ${this.altitude}, vel: ${this.velocity}`;
    }

    public static latitudeToDecimal(lat: string, NS: string): number {
        let med = (parseFloat(lat.substring(2)) / 60.0);
        med += parseFloat(lat.substring(0, 2));
        if (NS.startsWith("S")) {
            med = -med;
        }
        return med;
    }

    public static longitudeToDecimal(lon: string, WE: string): number {
        let med = parseFloat(lon.substring(3)) / 60.0;
        med += parseFloat(lon.substring(0, 3));
        if (WE.startsWith("W")) {
            med = -med;
        }
        return med;
    }
}