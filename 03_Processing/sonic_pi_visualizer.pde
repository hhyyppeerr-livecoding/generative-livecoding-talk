String[] words = {"MACHINE", "DRIVEN", "TEST", "SIGNAL", "TRUE", "FALSE", "CATCH", "GET", "PUT",
                  "DATA", "ONLINE", "OFFLINE", "REQUEST", "RESPONSE", "ERROR", "NOT", "FOUND",
                  "INTERNAL", "SERVER", "ERROR", "CLIENT", "SERVER", "CLIENT", "USER", "LOGIN",
                  "LOGOFF", "CODE", "SCRIPT", "ALGORITHM", "NET", "LOCATION", "DEBUG", "COLLAPSE",
                  "LOOP", "DO", "RUN", "LOG", "CONSOLE", "PORT", "SOCKET", "REMOTE", "ENVIRONMENT",
                  "SORT", "FIX", "CUT", "PASTE", "DELETE", "SEND", "COPY", "SELECT", "PROCESS",
                  "EXTRACT", "SEARCH", "INCREMENT", "DECREMENT", "VALIDATE", "AUTH",
                  "PERMISSION", "DENY", "ALLOW", "CONFIGURE", "SETTINGS", "OPTIONS", "BROWSER", "CACHE",
                  "SESSION", "QUERY", "INDEX", "TABLE", "FIELD", "ROW", "COLUMN", "JOIN",
                  "FOREIGN", "KEY", "PRIMARY", "UNIQUE", "INDEX", "BACKUP", "RESTORE", "MIGRATE",
                  "TRANSACTION", "COMMIT", "ROLLBACK", "RETRY", "HANDLER", "EVENT", "NOTIFICATION", "ALERT",
                  "LOGGING", "MONITORING", "ANALYSIS", "METRICS", "PERFORMANCE", "OPTIMIZATION", "SECURITY",
                  "DECRYPT", "HASH", "AUTHORIZATION", "VALIDATION", "REF", "ESCAPE",
                  "INPUT", "OUTPUT", "CLASS", "OBJECT", "INSTANCE", 
                  "ENCAPSULATION", "ABSTRACTION", "INTERFACE",
                  "METHOD", "PARAMETER", "RETURN", "OVERRIDE", "STATIC", "FINAL",
                  "PACKAGE", "IMPORT", "ACCESS", "MODIFIER", "PUBLIC", "PRIVATE", "PROTECTED", "DEFAULT",
                  "THROW", "THROWS", "EXCEPTION", "TRY", "CATCH", "FINALLY", "THREAD", "SYNC",
                  "THREAD", "RUNNABLE", "INTERRUPT", "WAIT", "NOTIFY", "NOTIFYALL", "QUEUE", "STACK",
                  "LIST", "ARRAY", "LINKED", "TREE", "HASH", "SET", "MAP", "ITERATOR",
                  "GENERICS", "WILDCARDS", "ENUM", "ANNOTATION", "SERIAL", "STREAM", "FILE", "INPUT","STREAM",
                  "READ", "WRITE", "BUFFER", "READER", "WRITER", "CONNECTION",
                  "STATEMENT", "PREPARED","STATEMENT", "RESULT","SET", "TRANSACTION", "BATCH", "SCHEMA", "INDEX", "VIEW",
                  "TRIGGER", "FUNCTION", "PROCEDURE", "CURSOR", "DDL", "DML", "SELECT", "POINTER"};

import oscP5.*;
import netP5.*;

int currentWordIndex = 0;
int back = 0;
int front = 255;

int palabra = 0;
int llamadas = 0;
OscP5 oscP5;

NetAddress myBroadcastLocation; // NetAdress contiene la IP y el puerto que usaremos

void setup() {
  size(1600, 800);
  fullScreen();
  frameRate(60);
  textSize(200);
  textAlign(CENTER, CENTER);
  background(0);
  textFont(createFont("Noto Sans", 200));
  oscP5 = new OscP5(this, 12000); //definimos el puerto que usaremos para mandar desde Sonic Pi
  myBroadcastLocation = new NetAddress("127.0.0.1", 32000);  //creamos nuestra direccion para comunicarnos por OSC

}

void draw() {
  background(back);
  fill(front);
  text(words[palabra], width/2, height/2);
}


void oscEvent(OscMessage theOscMessage) { //evento cuando nos comunicamos por OSC con Processing
  int palabra_aux = int(random(words.length-1));
  while(palabra_aux == palabra){
    palabra_aux = int(random(words.length-1));
  }
  palabra = palabra_aux;
}