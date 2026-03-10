import { useMutation } from "@tanstack/react-query";
import { api, type ContactMessageInput } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

export function useSubmitContact() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: ContactMessageInput) => {
      const validated = api.contactMessages.create.input.parse(data);
      const res = await fetch(api.contactMessages.create.path, {
        method: api.contactMessages.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validated),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Falha ao enviar mensagem");
      }

      return api.contactMessages.create.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Agradecemos o seu contato. Retornaremos em breve.",
        variant: "default",
      });
    },
    onError: (error) => {
      toast({
        title: "Erro ao enviar",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}
