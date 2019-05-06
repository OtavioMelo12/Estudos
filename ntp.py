import ntplib
import time 
import datetime

NIST = 'a.st1.ntp.br'
ntp = ntplib.NTPClient()
ntpResponse = ntp.request(NIST, version=3)

if (ntpResponse):  
    print(ntpResponse.tx_time)


#1556908560

#1556897760

#10800
