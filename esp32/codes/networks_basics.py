import network #importa a lib

#configura o tipo de conexao( station ou acess point)
sta_if = network.WLAN(network.STA_IF)
ap_if = network.WLAN(network.AP_IF)

#verifica o estado da conexao
sta_if.active()
ap_if.active()

#verificar configuraçoes de ip
ap_if.ifconfig()

#ativa a conexao
sta_if.active(True)

#conecta no wifi com nome e senha 
sta_if.connect('<your ESSID>', '<your password>')

#verifica se a conexao esta estavel
sta_if.isconnected()

#desativa a conexao
ap_if.active(False)

#funçao para conectar automaticamente
def do_connect():
        import network
        sta_if = network.WLAN(network.STA_IF)
        if not sta_if.isconnected():
            print('connecting to network...')
            sta_if.active(True)
            sta_if.connect('<essid>', '<password>')
            while not sta_if.isconnected():
                pass
            print('network config:', sta_if.ifconfig())
