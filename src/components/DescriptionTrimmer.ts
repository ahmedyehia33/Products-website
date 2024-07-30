export function DescriptionTrimmer(p: string): string{
    if (p.length <= 50) {
        return p;
    }
    return p.substring(0, 50) + '...';


}