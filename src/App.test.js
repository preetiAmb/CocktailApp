import { renderHook } from '@testing-library/react-hooks-next';
import { useFetchCocktails } from "../src/components/useFetchCocktails";


describe('useFetchCocktails', () => {
  test('should fetch data and return it', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchCocktails());
    expect(result.current.loading).toBe(true);
    await waitForNextUpdate();
    expect(result.current.loading).toBe(false);
    expect(result.current.cocktails.length).toBeGreaterThan(0);
  });
});