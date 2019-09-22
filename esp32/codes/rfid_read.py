import mfrc522

import mfrc522

RF_SCK = 12  # clock
RF_SDA = 13  # data
RF_MOSI = 14  # master-out slave-in
RF_MISO = 27  # master-in slave-out
RF_RST = 26  # reset


class Mfrc522():
    def __init__(self, allowed_id='0x64963524'):
        self.rdr = mfrc522.MFRC522(RF_SCK, RF_MOSI, RF_MISO, RF_RST, RF_SDA)
        self.allowed_id = allowed_id
        self.read()

    def read(self):
        while True:
            (stat, tag_type) = self.rdr.request(self.rdr.REQIDL)
            if stat == self.rdr.OK:
                (stat, raw_uid) = self.rdr.anticoll()
                try:
                    read = "0x%02x%02x%02x%02x" % (raw_uid[0], raw_uid[1], raw_uid[2], raw_uid[3])
                    if read == self.allowed_id:
                        print("Usuário permitido :) -", read)
                    else:
                        print("Usuário não permitido :( -", read)
                except IndexError:
                    pass
                    
                    
                    
    try:
    
    while True:
        (stat, raw_uid) = rdr.anticoll()
    
        if stat == rdr.OK:
            print("Novo cartao detectado")
            print("  - tag type: 0x%02x" % tag_type)
            print("  - uid  : 0x%02x%02x%02x%02x" % (raw_uid[0], raw_uid[1], raw_uid[2], raw_uid[3]))
            print(" ")

            if rdr.selected_tag(raw_uid) == rdr.OK:
            
                key = [0xFF, 0xFF, 0xFF, 0xFF, 0xFF]
                
                if rdr.auth(rdr.AUTHENT1A, 8, key, raw_uid) == rdr.OK:
                    print("Address 8 data: %s" % rdr.read(8))
                    rdr.stop_crypto1()
                else:
                    print("Erro na autenticaçao")
            else:
                print("Falha ao selecionar tag")

except KeyboardInterrupt:
    print("BYe")

