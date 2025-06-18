import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
  Text,
} from "@chakra-ui/react";

const LessonForm = () => {
  const [formData, setFormData] = useState({
    ageGroup: "",
    learningGoals: "",
    preferences: "",
  });

  const [response, setResponse] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setResponse(`Lesson plan created for ${formData.ageGroup}\nGoals: ${formData.learningGoals}`);
  };

  return (
    <Box p={6} maxW="lg" mx="auto" mt={10} bg="white" borderRadius="md" shadow="md">
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl>
            <FormLabel>Age Group</FormLabel>
            <Input name="ageGroup" value={formData.ageGroup} onChange={handleChange} />
          </FormControl>
          <FormControl>
            <FormLabel>Learning Goals</FormLabel>
            <Textarea name="learningGoals" value={formData.learningGoals} onChange={handleChange} />
          </FormControl>
          <FormControl>
            <FormLabel>Preferences</FormLabel>
            <Textarea name="preferences" value={formData.preferences} onChange={handleChange} />
          </FormControl>
          <Button type="submit" colorScheme="blue" width="full">
            Generate Lesson Plan
          </Button>
        </VStack>
      </form>

      {response && (
        <Box mt={6} p={4} bg="gray.50" borderRadius="md">
          <Text whiteSpace="pre-wrap">{response}</Text>
        </Box>
      )}
    </Box>
  );
};

export default LessonForm;
