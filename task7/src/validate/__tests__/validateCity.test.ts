import { validateCityName } from '../validateCity';
import { errors } from '../../utils/dictionarty';

describe('validateCityName', () => {
    it('Warn if escape chars found', () => {
        const { isValid, message } = validateCityName('<script>alert("xss");</script>');

        expect(isValid).toBe(false);
        expect(message).toBe(errors.city.escape);
    });

    it('Pass name with exclamation marks or hyphens', () => {
        const { isValid, message } = validateCityName('Saint-Louis-du-Ha! Ha!');

        expect(isValid).toBe(true);
        expect(message).toBe(errors.city.valid);
    });

    it('Pass name with special chars', () => {
        const { isValid, message } = validateCityName('Ağrı');

        expect(isValid).toBe(true);
        expect(message).toBe(errors.city.valid);
    });

    it('Pass one letter name', () => {
        const { isValid, message } = validateCityName('A');

        expect(isValid).toBe(true);
        expect(message).toBe(errors.city.valid);
    });
});
