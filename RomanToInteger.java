import java.util.Scanner;

public class RomanToInteger {
    int value(char ch){
        if (ch=='I'){
            return 1;
        }
        if (ch=='V'){
            return 5;
        }
        if (ch=='X'){
            return 10;
        }
        if (ch=='L'){
            return 50;
        }
        if (ch=='C'){
            return 100;
        }
        if (ch=='D'){
            return 500;
        }
        if (ch=='M'){
            return 1000;
        }
        return -1;
    }
    int romanToInt(String str){
        int total=0;
        for (int i=0;i<str.length();i++){
            int str1=value(str.charAt(i));
            if(i+1<str.length()){
               int str2=value(str.charAt(i+1));
               if (str1>=str2){
                   total=total+str1;
               }
               else{
                   total=total-str1;
               }
            }
            else{
                total=total+str1;
            }
        }
        return total;
    }

    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter Roman value");
        RomanToInteger r=new RomanToInteger();
        String romnum=sc.next();
        System.out.println("the corresponding integer value is "+r.romanToInt(romnum));
    }

}
