describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });
  
    // it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offest 33');
    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offest 33',() =>{
      assert.equal(cipher.encode(33,"ABCDEFGHIJKLMNOPQRSTUVWXYZ"),'HIJKLMNOPQRSTUVWXYZABCDEFG')
    });

    it('debería retornar "hijklmnopqrstuvwxyzabcdefg 0123456789" para "abcdefghijklmnopqrstuvwxyz 0123456789" con offest 33',() =>{
      assert.equal(cipher.encode(33,"abcdefghijklmnopqrstuvwxyz 0123456789"),'hijklmnopqrstuvwxyzabcdefg 0123456789')
    });

  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {  
      assert.equal(typeof cipher.decode, 'function');
    });
    
    //it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offest 33');
    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offest 33',() =>{
      assert.equal(cipher.decode(33,"HIJKLMNOPQRSTUVWXYZABCDEFG"),'ABCDEFGHIJKLMNOPQRSTUVWXYZ')
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offest 33',() =>{
      assert.equal(cipher.decode(33,"hijklmnopqrstuvwxyzabcdefg 0123456789"),'abcdefghijklmnopqrstuvwxyz 0123456789')
    });
  
  });

  describe('cipher.createCipherWithOffset', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.createCipherWithOffset, 'function');
    });
    
    //it('debería retornar un objeto con dos funciones (encode y decode) con offset fijado');
    it('debería retornar un objeto con dos funciones (encode y decode) con offset fijado',()=>{
      assert.equal(typeof cipher.createCipherWithOffset(33), 'object');
      assert.property(cipher.createCipherWithOffset(33),'encode');
      assert.property(cipher.createCipherWithOffset(33),'decode');
      assert.isFunction(cipher.createCipherWithOffset(33).encode);
      assert.isFunction(cipher.createCipherWithOffset(33).decode);

    })
 
    it('cipher.createCipherWithOffset(33).encode("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz 0123456789") deberia retornar "HIJKLMNOPQRSTUVWXYZABCDEFGhijklmnopqrstuvwxyzabcdefg 0123456789"',()=>{
      assert.equal(cipher.createCipherWithOffset(33).encode("a"),'h');
    })

    it('cipher.createCipherWithOffset(33).decode("HIJKLMNOPQRSTUVWXYZABCDEFGhijklmnopqrstuvwxyzabcdefg 0123456789") deberia retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz 0123456789"',()=>{
      assert.equal(cipher.createCipherWithOffset(33).decode("h"),'a');
    })

  });

});
