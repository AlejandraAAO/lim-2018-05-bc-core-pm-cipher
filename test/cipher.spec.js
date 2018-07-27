describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar para letras minusculas "egdntrid uxcpaxopsd" para "proyecto finalizado" con offset 67', () =>{
      assert.equal(cipher.encode(67,"proyecto finalizado"), "egdntrid uxcpaxopsd");
    });
    it('debería retornar para letras mayusculas "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', () =>{
      assert.equal(cipher.encode(33,"ABCDEFGHIJKLMNOPQRSTUVWXYZ"), "HIJKLMNOPQRSTUVWXYZABCDEFG");
    });
    it('debería retornar para otros caracteres "123456¡?" para "123456¡?" con offset 34', () =>{
      assert.equal(cipher.encode(34,"123456¡?"), "123456¡?");
    });
  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar pra letras mayusculas  "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33', ()=>{
    assert.equal(cipher.decode(33,"HIJKLMNOPQRSTUVWXYZABCDEFG"), "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    });
    it('debería retornar para letras minusculas "proyecto finalizado" para "egdntrid uxcpaxopsd" con offset 67', ()=>{
    assert.equal(cipher.decode(67,"egdntrid uxcpaxopsd"), "proyecto finalizado");
    });
    it('debería retornar para otros caracteres "123456¡?" para "123456¡?" con offset 34', () =>{
      assert.equal(cipher.decode(34,"123456¡?"), "123456¡?");
    });
  });

  describe('cipher.createCipherWithOffset', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.createCipherWithOffset, 'function');
    });

    it('debería retornar un objeto con dos funciones (encode y decode) con offset fijado', ()=>{
      let cipherWithOffset = cipher.createCipherWithOffset(33);
      assert.equal(typeof cipherWithOffset.encode, 'function');
      assert.equal(typeof cipherWithOffset.decode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para el metodo encode con offset 33 y string "ABCDEFGHIJKLMNOPQRSTUVWXYZ"', () =>{
      assert.equal(cipher.createCipherWithOffset(33).encode("ABCDEFGHIJKLMNOPQRSTUVWXYZ"), "HIJKLMNOPQRSTUVWXYZABCDEFG");
    }); 
    
    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para el metodo deoce con offset 33 y string "HIJKLMNOPQRSTUVWXYZABCDEFG"', () =>{
      assert.equal(cipher.createCipherWithOffset(33).decode("HIJKLMNOPQRSTUVWXYZABCDEFG"), "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    });  
  });

});
