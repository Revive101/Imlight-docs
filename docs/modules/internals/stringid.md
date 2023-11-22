# String ID

For commonly used string literals, the game client will instead employ a `uint32_t` hash rather than the actual string for convenient purposes.

```csharp
public static uint HashString(string input)
{
    int result = 0;

    var shift1 = 0;
    var shift2 = 32;
    foreach (char c in input)
    {
        var cb = (byte)c;

        result ^= (cb - 32) << shift1;

        if (shift1 > 24)
        {
            result ^= (cb - 32) >> shift2;
            if (shift1 >= 27)
            {
                shift1 -= 32;
                shift2 += 32;
            }
        }
        shift1 += 5;
        shift2 -= 5;
    }

    if (result < 0)
         result = -result;

    return (uint)result;
}
```
__Figure A.I__ - A string ID hash method from Imlight's cryptography library.