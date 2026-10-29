"""Uma calculadora simples para usar no terminal."""


def ler_numero(mensagem):
    while True:
        try:
            return float(input(mensagem).replace(",", "."))
        except ValueError:
            print("Digite um número válido, como 10 ou 2,5.")


def main():
    print("Bem-vindo à calculadora!")

    while True:
        print("\n1 - Somar\n2 - Subtrair\n3 - Multiplicar\n4 - Dividir\n0 - Sair")
        opcao = input("Escolha uma opção: ").strip()

        if opcao == "0":
            print("Até mais!")
            break

        if opcao not in ("1", "2", "3", "4"):
            print("Opção inválida. Escolha de 0 a 4.")
            continue

        primeiro = ler_numero("Primeiro número: ")
        segundo = ler_numero("Segundo número: ")

        if opcao == "1":
            resultado = primeiro + segundo
        elif opcao == "2":
            resultado = primeiro - segundo
        elif opcao == "3":
            resultado = primeiro * segundo
        else:
            if segundo == 0:
                print("Não é possível dividir por zero.")
                continue
            resultado = primeiro / segundo

        print(f"Resultado: {resultado:g}")


if __name__ == "__main__":
    try:
        main()
    except (EOFError, KeyboardInterrupt):
        print("\nAté mais!")
