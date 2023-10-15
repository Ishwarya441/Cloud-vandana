import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class ShuffleArray {
    public static void main(String[] args) {
        Integer[] myArr={1,2,3,4,5,6,7};
        List<Integer> list= Arrays.asList(myArr);
        Collections.shuffle(list);
        myArr=list.toArray(new Integer[0]);
        System.out.println(Arrays.toString(myArr));
    }
}
