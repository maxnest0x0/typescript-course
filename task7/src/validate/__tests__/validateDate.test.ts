import { validateDate } from '../validateDate';
import { errors } from '../../utils/dictionarty';

describe('validateDate', () => {
    it('Pass correct date', () => {
        const { isValid, message } = validateDate('01.01.2025');

        expect(isValid).toBe(true);
        expect(message).toBe(errors.date.valid);
    });

    it('Do not pass special chars', () => {
        const { isValid, message } = validateDate('0!.0!.2025');

        expect(isValid).toBe(false);
        expect(message).toBe(errors.date.invalidCharacters);
    });

    it('Do not pass letters', () => {
        const { isValid, message } = validateDate('O1.O1.2O25');

        expect(isValid).toBe(false);
        expect(message).toBe(errors.date.invalidCharacters);
    });

    it('Warn if date is in the past', () => {
        const { isValid, message } = validateDate('01.01.2024');

        expect(isValid).toBe(false);
        expect(message).toBe(errors.date.past);
    });
});
