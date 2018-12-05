describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offest 33', () => {
      assert.equal(cipher.encode(33, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'), 'HIJKLMNOPQRSTUVWXYZABCDEFG');
    });

    it('debería retornar "hijklmnopqrstuvwxyzabcdefg" para "abcdefghijklmnopqrstuvwxyz" con offset 33', () => {
      assert.equal(cipher.encode(33, 'abcdefghijklmnopqrstuvwxyz'), 'hijklmnopqrstuvwxyzabcdefg');
    });

    it('debería retornar "ÂOvsh Tbukv"" para "¡Hola Mundo!" con offset 33', () => {
      assert.equal(cipher.encode(33, '¡Hola Mundo!'), 'ÂOvsh Tbukv"');
    });

    it('debería retornar "[\\[" para "^_^" con offset 33', () => {
      assert.equal(cipher.encode(33, '^_^'), '[\\[');
    });

    it('debería retornar "zabcdefghijklmnopqrstuvwxy" para "abcdefghijklmnopqrstuvwxyz" con offset -27', () => {
      assert.equal(cipher.encode(-27, 'abcdefghijklmnopqrstuvwxyz'), 'zabcdefghijklmnopqrstuvwxy');
    }); 
  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offest 33', () => {
      assert.equal(cipher.decode(33,"HIJKLMNOPQRSTUVWXYZABCDEFG" ), "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    });

    it('debería retornar "abcdefghijklmnopqrstuvwxyz" para "hijklmnopqrstuvwxyzabcdefg" con offset 33', () => {
      assert.equal(cipher.decode(33, 'hijklmnopqrstuvwxyzabcdefg'), 'abcdefghijklmnopqrstuvwxyz');
    });

    it('debería retornar "¡Hola Mundo!" para "ÂOvsh Tbukv"" con offset 33', () => {
      assert.equal(cipher.decode(33, 'ÂOvsh Tbukv"'), '¡Hola Mundo!');
    });

    it('debería retornar "^_^" para "[\\[" con offset 33', () => {
      assert.equal(cipher.decode(33, '[\\['), '^_^');
    });

    it('debería retornar "abcdefghijklmnopqrstuvwxyz" para "zabcdefghijklmnopqrstuvwxy" con offset -27', () => {
      assert.equal(cipher.decode(-27, 'zabcdefghijklmnopqrstuvwxy'), 'abcdefghijklmnopqrstuvwxyz');
    });
  });

});
