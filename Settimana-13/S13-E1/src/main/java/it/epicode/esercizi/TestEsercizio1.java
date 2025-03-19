package it.epicode.esercizi;

public class TestEsercizio1 {


    public static int moltiplica(int a, int b) {
        return a * b;
    }


    public static String concatena(String s, int n) {
        return s + n;
    }

    public static void main(String[] args) {
        // Esempio d’uso di moltiplica
        System.out.println( "Risultato moltiplica: " + TestEsercizio1.moltiplica(5, 7) );

        // Esempio d’uso di concatena
        System.out.println( "Risultato concatena: " + TestEsercizio1.concatena("Numero: ", 10) );
    }
}
