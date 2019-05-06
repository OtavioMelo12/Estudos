import network

def connect():
    ssid = ""
    password = ""

    station = network.WLAN(network.STA_IF)

    if station.isconnected() == True:
        print("ja conectado")
        return

    station.active(True)
    station.connect(ssid, password)

    while station .isconnected() == False:
        pass

    print("Conectado com sucesso")
    print(station.ifconfig())
    
