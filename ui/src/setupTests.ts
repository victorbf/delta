import '@testing-library/jest-dom';
class FormDataMock {
  append: (name: string, value: string | Blob, fileName?: string) => void = vitest.fn();
  delete: (name: string) => void = vitest.fn();
  get: (name: string) => FormDataEntryValue | null = vitest.fn();
  getAll: (name: string) => FormDataEntryValue[] = vitest.fn();
  has: (name: string) => boolean = vitest.fn();
  set: (name: string, value: string | Blob, fileName?: string) => void = vitest.fn();
  forEach: (callbackfn: (value: FormDataEntryValue, key: string, parent: FormData) => void, thisArg?: any) => void =
    vitest.fn();
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
global.FormData = FormDataMock;
