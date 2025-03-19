package it.epicode.esercizi;

import java.util.Scanner;

public class TestEsercizio2 {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);


        System.out.print("Inserisci la prima stringa: ");
        String s1 = sc.nextLine();

        System.out.print("Inserisci la seconda stringa: ");
        String s2 = sc.nextLine();

        System.out.print("Inserisci la terza stringa: ");
        String s3 = sc.nextLine();


        String concatenazioneOrdinata = s1 + s2 + s3;
        System.out.println("Concatenazione in ordine di inserimento: " + concatenazioneOrdinata);


        String concatenazioneInversa = s3 + s2 + s1;
        System.out.println("Concatenazione in ordine inverso: " + concatenazioneInversa);

        sc.close();
    }
}
