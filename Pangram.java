public class Pangram {
    public static void main(String[] args) {
        String sentence="The quick browm fox jumps over the lazy dog";
        if (isPangram(sentence))
        {
            System.out.println("input is pangram");
        }
        else{
            System.out.println("input is not a pangram");
        }
    }
    public static boolean isPangram(String s){
        s=s.toLowerCase();
        for (char c='a';c<='z';c++){
            if (s.indexOf(c)==-1){
                return false;
            }
        }
        return true;
    }
}
