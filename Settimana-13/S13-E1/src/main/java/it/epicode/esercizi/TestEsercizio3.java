package it.epicode.esercizi;

import java.util.Scanner;

public class TestEsercizio3 {


    public static double perimetroRettangolo(double lato1, double lato2) {
        return 2 * (lato1 + lato2);
    }


    public static int pariDispari(int numero) {
        if (numero % 2 == 0) {
            return 0;
        } else {
            return 1;
        }
    }


    public static double perimetroTriangolo(double a, double b, double c) {
        double semiperimetro = (a + b + c) / 2;
        double area = Math.sqrt( semiperimetro *
                (semiperimetro - a) *
                (semiperimetro - b) *
                (semiperimetro - c) );
        return area;
    }


    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // perimetroRettangolo
        System.out.print("Inserisci il primo lato del rettangolo: ");
        double lato1 = sc.nextDouble();
        System.out.print("Inserisci il secondo lato del rettangolo: ");
        double lato2 = sc.nextDouble();
        double perimetro = perimetroRettangolo(lato1, lato2);
        System.out.println("Il perimetro del rettangolo è: " + perimetro);

        // pariDispari
        System.out.print("Inserisci un numero intero per verificare se è pari o dispari: ");
        int numero = sc.nextInt();
        int risultato = pariDispari(numero);
        if (risultato == 0) {
            System.out.println("Il numero è pari.");
        } else {
            System.out.println("Il numero è dispari.");
        }

        System.out.print("Inserisci il primo lato del triangolo: ");
        double a = sc.nextDouble();
        System.out.print("Inserisci il secondo lato del triangolo: ");
        double b = sc.nextDouble();
        System.out.print("Inserisci il terzo lato del triangolo: ");
        double c = sc.nextDouble();
        double areaTriangolo = perimetroTriangolo(a, b, c);
        System.out.println("L'area del triangolo è: " + areaTriangolo);

        sc.close();
    }
}
